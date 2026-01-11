from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from research_and_blog_crew.crew import ResearchAndBlogCrew
from datetime import datetime

app = FastAPI(title="Research & Blog Crew API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class KickoffRequest(BaseModel):
    topic: str

class KickoffResponse(BaseModel):
    result: str

@app.post("/kickoff", response_model=KickoffResponse)
def kickoff(request: KickoffRequest):
    """
    Trigger the crew execution with a specific topic.
    """
    try:
        inputs = {
            'topic': request.topic,
            'current_date': datetime.now().strftime("%Y-%m-%d")
        }
        # Run the crew synchronously (CrewAI is sync by default unless configured otherwise)
        result = ResearchAndBlogCrew().crew().kickoff(inputs=inputs)
        return KickoffResponse(result=str(result))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "healthy"}
