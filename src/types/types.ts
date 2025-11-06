export interface LegalResponse {
  title: string;
  summary: string;
}

export interface ResponseCardProps {
  response: {
    title: string;
    content: string;
  };
  query?: string; 
}