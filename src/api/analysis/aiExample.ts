// // API Service Example
// class AudioAnalysisService {
//   private baseUrl = "http://localhost:3000";

//   async uploadAudio(file: File, token: string): Promise<JobStatusDto> {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch(`${this.baseUrl}/audio-analysis/upload`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     if (!response.ok) throw new Error("Upload failed");
//     return response.json();
//   }

//   async getJobStatus(jobId: string, token: string): Promise<JobStatusDto> {
//     const response = await fetch(
//       `${this.baseUrl}/audio-analysis/jobs/${jobId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) throw new Error("Failed to get job status");
//     return response.json();
//   }

//   async getAnalysisResults(
//     jobId: string,
//     token: string
//   ): Promise<AnalysisResultsDto> {
//     const response = await fetch(
//       `${this.baseUrl}/audio-analysis/jobs/${jobId}/results`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) throw new Error("Failed to get analysis results");
//     return response.json();
//   }
// }
