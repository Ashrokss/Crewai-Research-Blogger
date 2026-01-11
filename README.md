# AI Research & Blog Writer ✍️

A sophisticated multi-agent AI crew powered by [CrewAI](https://docs.crewai.com/en/introduction) and Gemini that automates the process of researching any topic and turning it into an engaging blog post.

## 🚀 Features

-   **Autonomous Research**: The `Report Generator` agent uses the Serper API to scrape the web for the latest information, trends, and facts about your topic.
-   **Creative Writing**: The `Blog Writer` agent synthesizes the research into a fun, easy-to-read blog post in Markdown format.
-   **Google Gemini Powered**: Utilizes the latest `gemini-2.5-flash-preview` model for high-speed, high-quality reasoning.
-   **Fully Customizable**: Easily tweak agent personas, goals, and writing styles via YAML configuration.

## Installation

> **New to CrewAI?** Check out the [Quickstart Guide](https://docs.crewai.com/en/quickstart) to get set up.

Ensure you have Python >=3.10 <3.14 installed on your system. This project uses [UV](https://docs.astral.sh/uv/) for dependency management and package handling, offering a seamless setup and execution experience.

First, if you haven't already, install uv:

```bash
pip install uv
```

Next, navigate to your project directory and install the dependencies:

(Optional) Lock the dependencies and install them by using the CLI command:
```bash
crewai install
```
### Customizing

**Add your `GEMINI_API_KEY` and `SERPER_API_KEY` into the `.env` file**

-   **Agents**: Modify `src/research_and_blog_crew/config/agents.yaml` to tweak the personas of `report_generator` and `blog_writer`.
-   **Tasks**: Modify `src/research_and_blog_crew/config/tasks.yaml` to adjust the research depth or blog tone.
-   **Logic**: Modify `src/research_and_blog_crew/crew.py` to add more tools or change the process flow.
-   **Topic**: Modify the `topic` variable in `src/research_and_blog_crew/main.py` before running.

## Running the Project

To kickstart your crew of AI agents and begin task execution, run this from the root folder of your project:

```bash
$ crewai run
```

### Running the Web Application

The project consists of a FastAPI backend and a Next.js frontend.

#### 1. Start the Backend API
Navigate to the `src` directory and run:
```bash
uvicorn research_and_blog_crew.api:app --reload --port 8000
```

#### 2. Start the Frontend
Navigate to the `frontend` directory and run:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

This command initializes the research_and_blog_crew Crew, assembling the agents and assigning them tasks as defined in your configuration.

This will run the crew and generate a comprehensive blog post in the `blogs/` directory (e.g., `blogs/blog.md`) covering your specified topic.

## 🧠 Understanding Your Crew

The **ResearchAndBlogCrew** is composed of two specialized AI agents that work sequentially:

### 1. **Report Generator** (`report_generator`)
-   **Role**: Expert Report Generator
-   **Goal**: Create detailed, multi-dimensional reports on {topic}
-   **Tools**: `SerperDevTool` for real-time internet search.
-   **Task**: Conducts thorough research (Task: `report_task`) to find the latest trends, facts, and relevant information for the year 2024.

### 2. **Blog Writer** (`blog_writer`)
-   **Role**: Expert Blog Writer
-   **Goal**: Create well-crafted, fun-to-read blogs on {topic}
-   **Task**: Synthesizes the research report into a comprehensive markdown blog post (Task: `blog_writing_task`) that is accessible even to a 5-year-old.

## 🛠️ Tools & APIs

### 🌐 Serper API
This project utilizes [Serper](https://serper.dev), the world's fastest and cheapest Google Search API, to enable the `Report Generator` agent to **access real-time information** from the internet. 

Unlike standard LLMs which have knowledge cutoffs, this integration allows your crew to:
-   Fetch the latest news, trends, and articles.
-   Verify facts with current sources.
-   Conduct deep research on recent topics (e.g., 2024/2025 events).

### 🔧 Custom Tools
The project includes a structure for custom tools in `src/research_and_blog_crew/tools`. 

-   **`custom_tool.py`**: A template file provided to help you create your own custom tools. You can subclass `BaseTool` here to add specific capabilities to your agents beyond the built-in CrewAI tools.

## 📂 Output

The final blog post is saved to `blogs/blog.md`.


