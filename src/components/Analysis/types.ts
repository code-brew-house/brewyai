export type AudioFile = {
  name: string;
  size: number;
  file: File;
  url: string;
};

export type AlertState = {
  open: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
};
