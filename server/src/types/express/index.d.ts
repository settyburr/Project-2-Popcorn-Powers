declare namespace Express {
  interface Request {
    user?: {
      login: string;
      pasword: string;
      
    };
  }
}
