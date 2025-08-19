import { useRef, useState, type ChangeEvent } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import type { AlertState, AudioFile } from "./types";
import { CircularProgress, IconButton, OutlinedInput } from "@mui/material";

export const AudioUpload = ({
  onFileChange,
  onAlert,
}: {
  onFileChange: (file: AudioFile | null) => void;
  onAlert: (alert: AlertState) => void;
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<AudioFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("audio/")) {
      onAlert({
        open: true,
        message: "Please upload an audio file",
        severity: "error",
      });
      return;
    }

    setIsUploading(true);
    try {
      // Create object URL for audio playback
      const url = URL.createObjectURL(file);

      const audioFile = {
        name: file.name,
        size: file.size,
        file,
        url,
      };
      setUploadedFile(audioFile);
      onFileChange(audioFile);
    } catch (error) {
      console.error("Error uploading file:", error);
      onAlert({
        open: true,
        message: "Failed to upload file",
        severity: "error",
      });
      onFileChange(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    if (uploadedFile?.url) {
      URL.revokeObjectURL(uploadedFile.url);
    }
    setUploadedFile(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (isUploading) {
    return (
      <div className="uploadingContainer">
        <CircularProgress size={24} />
        <span>Uploading Audio</span>
      </div>
    );
  }

  if (uploadedFile) {
    return (
      <>
        <OutlinedInput
          id="audioUploadInput"
          size="small"
          className="audioInputContainer"
          fullWidth
          value={uploadedFile.name}
          readOnly
          endAdornment={
            <IconButton size="small" onClick={handleRemoveFile}>
              <CloseIcon />
            </IconButton>
          }
        />
        <audio
          controls
          src={uploadedFile.url}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </>
    );
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        style={{ display: "none" }}
      />
      <OutlinedInput
        id="audioUploadInput"
        size="small"
        className="audioInputContainer"
        fullWidth
        onClick={triggerFileInput}
        readOnly
        placeholder="Click to upload audio file"
        endAdornment={
          <IconButton size="small" onClick={triggerFileInput}>
            <AttachFileIcon />
          </IconButton>
        }
      />
    </>
  );
};
