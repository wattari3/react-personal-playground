import { useCallback, useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Tesseract from 'tesseract.js';
import CommonButton from "../component/CommonButton";
import CommonPanel from "../component/CommonPanel";
import UploadArea from "../component/UploadArea";



const TesseractPage = (props: { name?: string }) => {
    const [processing, setProcessinng] = useState(false);
    const [ocrText, setOcrText] = useState("");
    const [targetFile, setTargetFile] = useState("");

    useEffect(() => {
        if (targetFile && processing) {
            Tesseract.recognize(
                targetFile,
                'jpn',
                {
                    logger: m => console.log(m)
                }
            ).then(({ data: { text } }) => {
                setOcrText(text);
                setProcessinng(false);
                setTargetFile("");
            });
        }
    }, [processing]);


    function handleClick() {
        setProcessinng(true);
    }

    function onFileChange(targetFile: string) {
        console.log(targetFile);
        setTargetFile(targetFile);
    }

    return (
        <MainLayout>
            <CommonPanel>
                <UploadArea onChangeFunc={onFileChange}></UploadArea>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <CommonButton value="▼ OCR ▼" onclick={handleClick} disabled={!targetFile || processing}></CommonButton>
                </div>
                <textarea className={"common_text_area"} value={ocrText} rows={10} cols={100} wrap="hard" disabled={processing} readOnly={true} />
            </CommonPanel>
        </MainLayout>
    )
}

export default TesseractPage;