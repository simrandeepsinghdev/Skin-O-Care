import * as React from 'react';
import { useState } from 'react';
import NavigationBar from "./comps/navigationbar.tsx";
import { uploadImageToStorage } from "./api/azurestorage_api.ts";
import { getPredictions, Prediction } from "./api/customvision_api.ts";
import { Card, Col, Row, Spinner } from "reactstrap";
import { FileUpload} from "./comps/fileupload.tsx";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');

    // Define object to map disease names to remedies
    const diseaseRemedies: { [key: string]: string } = {
        'acne': 'Apply benzoyl peroxide cream twice a day.',
        'nevus': 'Monitor for any changes in size, shape, or color.',
        'eczema': 'Keep skin moisturized and avoid triggers like harsh soaps.',
        'dermatofibroma': 'Usually harmless, but consult a dermatologist if concerned.',
        'vasc': 'Consult a dermatologist for proper evaluation and treatment.',
        'ringworm': 'Apply antifungal cream twice daily until symptoms resolve.',
        'melanoma': 'Urgently seek medical attention for proper diagnosis and treatment. Book your appointment now!'
    };

    const onFileChange = (event: any) => {
        setError('');
        setUploadedImageUrl('');
        setPredictions([]);
        setSelectedFile(null);

        if (event.target.files[0] === undefined) {
            setError('Any file was uploaded!');
            return;
        }

        if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
            setSelectedFile(event.target.files[0]);
        } else {
            setError('Unsupported file extension!');
            event.target.value = null;
        }
    };

    const onFileUpload = async () => {
        setError('');
        setPredictions([]);
        setUploadedImageUrl('');
        setPendingApiCall(true);

        if (!selectedFile) {
            setError('Any file was uploaded!');
            return;
        }

        uploadImageToStorage(selectedFile)
            .then(url => {
                setUploadedImageUrl(url);
                return getPredictions(url);
            }).then(response => {
                setPendingApiCall(false);
                setPredictions(response.data.predictions);
            }).catch(error => {
                setPendingApiCall(false);
                setError('Invalid image content!')
                console.error(error)
            });
    };

    const diseaseNameByTag: any = {
        'acne': 'ACNE / ROSACEA',
        'nevus': 'MELANOCYTIC NEVUS',
        'eczema': 'ECZEMA',
        'dermatofibroma': 'DERMATOFIBROMA',
        'vasc': 'VASCULAR LESION',
        'ringworm': 'RINGWORM / TINEA',
        'melanoma': 'MELANOMA'
    };

    return (
        <div className="container-lg mb-3">
            <NavigationBar />
            <FileUploadCard onFileChange={onFileChange} onFileUpload={onFileUpload} />
            <Card className="mt-2" style={{ minHeight: "60vh", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
                <Row>
                    {(pendingApiCall || (!pendingApiCall && !uploadedImageUrl) || error) &&
                        <Col className="col-12 d-flex flex-wrap align-items-center" style={{ minHeight: "56vh" }}>
                                Here you will see the predictions
                            </div>}
                            {error && <div className="text-danger text-center mx-auto">
                                {error}
                            </div>}
                        </Col>}
                    {(uploadedImageUrl && predictions.length > 0) && <Row>
                        </Col>
                        <Col className="col-6 align-self-center">
                                                {p.probability >= 0.9 &&
                                                    <p className="text-danger">
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>{Math.round(p.probability * 10000) / 100} % :  </span>
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}><b><i>{diseaseNameByTag[p.tagName]}</i></b></span><br /><br />
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>Remedy : </span>
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>{diseaseRemedies[p.tagName]}</span>
                                                    </p>
                                                }
                                                {p.probability < 0.9 && p.probability >= 0.8 &&
                                                    <p>
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>{Math.round(p.probability * 10000) / 100}%</span>
                                                        - <span style={{ color: 'rgb(26, 118, 209)' }}><b><i>{diseaseNameByTag[p.tagName]}</i></b> ({p.tagName})</span><br /><br />
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>Remedy:</span>
                                                        <span style={{ color: 'rgb(26, 118, 209)' }}>{diseaseRemedies[p.tagName]}</span>
                                                    </p>
                                                }
                                            </>
                                        }
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted"><br />Image analysis inconclusive. Please try with a clearer image</p>
                            )}
                        </Col>


                    </Row>}
                </Row>
            </Card>
        </div>
    );
}

export default App;
