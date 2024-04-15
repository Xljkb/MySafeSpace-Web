import {
    Dropzone,
    FileMosaic,
    FullScreen,
    ImagePreview,
    VideoPreview
  } from "@files-ui/react";
import { ExtFile } from "@dropzone-ui/react"
import { ChangeEvent, DragEvent, useState } from "react"

import { logValue } from "@/app/components/actions"

export const FileDropZone = () => {
    const [extFiles, setExtFiles] = useState<ExtFile[]>([]);
    const [imageSrc, setImageSrc] = useState<string | undefined>("");
    const [videoSrc, setVideoSrc] = useState<string | File | undefined>("");

  const updateFiles = (incomingFiles : ExtFile[]) => {
    console.log("Update files")
    setExtFiles(incomingFiles);
    console.log(incomingFiles)
  };
  const onDelete = (id : string | number | undefined) => {
    console.log("On delete")
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource : string | undefined) => {
    console.log("Handle See")
    setImageSrc(imageSource);
  };
  const handleWatch = (videoSource: string | File | undefined) => {
    console.log("Handle Watch")
    setVideoSrc(videoSource);
  };
  const handleStart = (filesToUpload : ExtFile[]) => {
    console.log("Handle Start")
  };
  const handleFinish = (uploadedFiles : ExtFile[]) => {
    console.log("Handle Finish")
  };
  const handleAbort = (id : number) => {
    console.log("Handle Abort")
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id : number) => {
    console.log("Handle Cancel")
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };
  return (
    <>
      <Dropzone
        onChange={ e => updateFiles(e)}
        minHeight="150px"
        value={extFiles}
        accept="image/*"
        maxFiles={15}
        maxFileSize={100 * 1024 * 1024}
        label="Нажмите или перетащите файлы для загрузки"
        localization={"RU-ru"}
        uploadConfig={{
          // autoUpload: true,
          url: "google.com",
          cleanOnUpload: true
        }}
        autoClean
        onUploadStart={handleStart}
        disableRipple
        onUploadFinish={handleFinish}
        fakeUpload={true}
        actionButtons={{
          position: "after",
          abortButton: {
            "label" : "Отменить"
          },
          uploadButton: {
            "label" : "Обработка"
          }
        }}
      >
        {extFiles.map((file : ExtFile) => (
          <FileMosaic
            {...file}
            key={file.id}
            onDelete={id => onDelete(id)}
            onSee={is => handleSee(is)}
            onWatch={ vs => handleWatch(vs)}
            onAbort={id => handleAbort}
            onCancel={id => handleCancel}
            resultOnTooltip
            alwaysActive
            preview
            info
          />
        ))}
      </Dropzone>
      <FullScreen
        open={imageSrc !== ""}
        onClose={() => setImageSrc("")}
      >
        <ImagePreview src={imageSrc} />
      </FullScreen>
      <FullScreen
        open={videoSrc !== ""}
        onClose={() => setVideoSrc("")}
      >
        <VideoPreview src={videoSrc} autoPlay controls />
      </FullScreen>
    </>
  );
}