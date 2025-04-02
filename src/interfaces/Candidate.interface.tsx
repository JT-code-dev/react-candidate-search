/* TODO: Create an interface for the Candidate objects returned by the API
// where do I find the data I will return? got it and fix the properties to match - check!
//

/* DATA FROM API*{login: 'mytree', 
  id: 3722716, 
  node_id: 'MDQ6VXNlcjM3MjI3MTY=', 
  avatar_url: 'https://avatars.githubusercontent.com/u/3722716?v=4', 
  gravatar_id: '', …}

{login: 'subwayhate2', 
id: 3722717, 
node_id: 'MDQ6VXNlcjM3MjI3MTc=', 
avatar_url: 'https://avatars.githubusercontent.com/u/3722717?v=4', 
gravatar_id: '', …}

*/
export interface Candidate {
  id: number | null;
  login: string | null;
  email: string | null;
  html_url: string | null;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  avatar_url: string | null;
}

