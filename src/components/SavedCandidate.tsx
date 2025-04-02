const SavedCandidate = ({ candidate }: any) => {
    return (
      <div className="saved-candidate-card">
        <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="100" />
        <h3>{candidate.name || candidate.login}</h3>
        <p>
          <strong>Location:</strong> {candidate.location || 'Not Available'}
        </p>
        <p>
          <strong>Email:</strong> {candidate.email || 'Not Available'}
        </p>
        <p>
          <strong>Company:</strong> {candidate.company || 'Not Available'}
        </p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>
    );
  };
  
  export default SavedCandidate;
  