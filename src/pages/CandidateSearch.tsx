import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import { Candidate } from "./interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    const currentCandidate: Candidate[] = candidates[currentIndex];
    const savedCandidates: any = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    savedCandidates.push(currentCandidate);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    showNextCandidate();
  };

  const showNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("No more candidates available.");
    }
  };

  if (loading) return <div>Loading candidates...</div>;

  if (!candidates.length) {
    return <div>No candidates available to display at the moment.</div>;
  }

  const currentCandidate = candidates[currentIndex];

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>
      <div className="candidate-card">
        <img
          src={currentCandidate.avatar_url}
          alt={`${currentCandidate.login}'s avatar`}
          width="150"
          height="150"
        />
        <h2>{currentCandidate.login}</h2>
        <p>
          <strong>Company:</strong> {currentCandidate.company || "Not Available"}
        </p>
        <p>
          <strong>Location:</strong> {currentCandidate.location || "Not Available"}
        </p>
        <p>
          <strong>Email:</strong> {currentCandidate.email || "Not Available"}
        </p>
        <a
          href={currentCandidate.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
      <div className="actions">
        <button onClick={saveCandidate}>Save Candidate</button>
        <button onClick={showNextCandidate}>Skip Candidate</button>
      </div>
    </div>
  );
};

export default CandidateSearch;

