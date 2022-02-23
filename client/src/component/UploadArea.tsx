
const UploadArea = (props: { onChangeFunc: (targetFile: string) => void }) => {
    return (
        <form method="post" encType="multipart/form-data">
            <div id="dragDropArea">
                <div className="drag-drop-inside">
                    <p className="drag-drop-info">ここにファイルをドロップ</p>
                    <p>または</p>
                    <p className="drag-drop-buttons">
                        <input id="fileInput" type="file" accept="image/*" name="photo"
                            onChange={(event) => {
                                console.log(event.target?.files)
                                if(event.target?.files?.[0]) {
                                    const dataURL = URL.createObjectURL(event.target.files[0]);
                                    props.onChangeFunc(dataURL);
                                }
                            }} />
                    </p>
                    <div id="previewArea"></div>
                </div>
            </div>
        </form>
    );
}

export default UploadArea;