import SavedCandidate from './SavedCandidate';

const SavedCandidateList = () => {
  const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

  return (
    <div className="saved-candidate-list">
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate: any, index: number) => (
          <SavedCandidate key={index} candidate={candidate} />
        ))
      ) : (
        <p>No potential candidates saved yet.</p>
      )}
    </div>
  );
};

export default SavedCandidateList;
