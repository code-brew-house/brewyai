import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Collapse,
  Box,
  Typography,
  styled,
} from "@mui/material";
import type { Theme } from "@mui/material";
import { Section } from "../Section";
import "./index.css";

const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: "bold",
  minWidth: "200px",
  whiteSpace: "nowrap",
  borderRight: "1px solid rgba(0, 0, 0, 0.12)",
}));

const ActionsHeaderCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
  position: "sticky",
  right: 0,
  background: "white",
  zIndex: 2,
  borderLeft: `1px solid ${theme.palette.divider}`,
  width: "1%",
  whiteSpace: "nowrap",
  textAlign: "center",
}));

const ActionsTableCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
  position: "sticky",
  right: 0,
  background: "white",
  zIndex: 1,
  borderLeft: `1px solid ${theme.palette.divider}`,
  textAlign: "right",
  width: "1%",
  whiteSpace: "nowrap",
}));

interface RowData {
  id: number;
  fileName: string;
  dateUploaded: string;
  audioDuration: string;
}

interface AnalysisResult {
  header: string;
  value: string;
}

const sampleData: RowData[] = [
  {
    id: 1,
    fileName: "interview_001.mp3",
    dateUploaded: "2024-03-20",
    audioDuration: "5:30",
  },
  {
    id: 2,
    fileName: "meeting_recording.wav",
    dateUploaded: "2024-03-19",
    audioDuration: "12:45",
  },
  {
    id: 3,
    fileName: "presentation.mp3",
    dateUploaded: "2024-03-18",
    audioDuration: "8:15",
  },
  {
    id: 4,
    fileName: "voice_note.m4a",
    dateUploaded: "2024-03-17",
    audioDuration: "3:20",
  },
];

const analysisResults: AnalysisResult[] = [
  { header: "Dominant Tone", value: "Conversational" },
  { header: "Confidence Score", value: "0.8" },
  { header: "Tone Description", value: "Casual, informal speaking tone" },
  { header: "Emotional Range", value: "Neutral" },
  { header: "Musical Key", value: "N/A" },
  {
    header: "Additional Notes",
    value:
      "The speaker is engaging in a natural and relaxed conversation. The tone is conversational, with a high confidence score of 0.8. This indicates that the speaker is engaging in a natural and relaxed conversation.",
  },
];

const Row = ({ row }: { row: RowData }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>{row.fileName}</TableCell>
        <TableCell>{row.dateUploaded}</TableCell>
        <TableCell>{row.audioDuration}</TableCell>
        <ActionsTableCell>
          <Button
            variant="outlined"
            onClick={() => setOpen(!open)}
            size="small"
          >
            {open ? "Hide Results" : "Show Results"}
          </Button>
        </ActionsTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2, padding: "1rem 0" }}>
              <Typography
                sx={{ fontSize: 16, fontWeight: 500 }}
                gutterBottom
                component="div"
              >
                Analysis Results
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Table
                  size="small"
                  sx={{
                    boxShadow: "none",
                  }}
                >
                  <TableBody>
                    {analysisResults.map((result) => (
                      <TableRow key={result.header}>
                        <StyledTableCell>{result.header}</StyledTableCell>
                        <TableCell sx={{ whiteSpace: "pre-wrap" }}>
                          {result.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export const Reports = () => {
  return (
    <Section
      title="Reports"
      description="View Your Audio Analysis Reports Here"
      withoutTopMargin
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          "& .MuiTable-root": {
            borderRadius: "10px",
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Date Uploaded</TableCell>
              <TableCell>Audio Duration</TableCell>
              <ActionsHeaderCell>Actions</ActionsHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};
