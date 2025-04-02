interface CandidateCardProps {
    currentUser: any;
    makeDecision: (isSelected: boolean) => void;
  }
  
  const CandidateCard = ({ currentUser, makeDecision }: CandidateCardProps) => {
    return (
      <div className="candidate-card">
        <img src={currentUser.avatar_url} alt={`${currentUser.login}'s avatar`} width="150" />
        <h3>{currentUser.name || currentUser.login}</h3>
        <p>
          <strong>Location:</strong> {currentUser.location || 'Not Available'}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email || 'Not Available'}
        </p>
        <p>
          <strong>Company:</strong> {currentUser.company || 'Not Available'}
        </p>
        <div className="decision-buttons">
          <button onClick={() => makeDecision(true)}>+</button>
          <button onClick={() => makeDecision(false)}>-</button>
        </div>
      </div>
    );
  };
  
  export default CandidateCard;
  