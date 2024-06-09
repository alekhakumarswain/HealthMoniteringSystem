class ApiService {
    static async uploadData(file) {
      // Code to send file to backend API
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: file,
      });
      return await response.json();
    }
  
    static async analyzeData() {
      // Code to fetch analysis result from backend API
      const response = await fetch('http://localhost:8000/api/analyze');
      return await response.json();
    }
  }
  
  export default ApiService;
  