import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  if (!savedCandidates.length) {
    return <div className="no-candidates">No saved candidates yet!</div>;
  }

  return (
    <div className="saved-candidates">
      <h1>Potential Candidates</h1>
      <div className="candidate-grid">
        {savedCandidates.map((candidate) => (
          <div className="candidate-card" key={candidate.id}>
            <img
              src={candidate.avatar_url}
              alt={`${candidate.login}'s avatar`}
              className="candidate-avatar"
            />
            <h2>{candidate.login}</h2>
            <p>
              <strong>Company:</strong> {candidate.company || "Not Available"}
            </p>
            <p>
              <strong>Location:</strong> {candidate.location || "Not Available"}
            </p>
            <p>
              <strong>Email:</strong> {candidate.email || "Not Available"}
            </p>
            <a
              href={candidate.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="candidate-link"
            >
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCandidates;
