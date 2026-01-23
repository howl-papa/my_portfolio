import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AI_bo from "../../Assets/Projects/ai-bo.gif";
import JobAI from "../../Assets/Projects/JobAI.gif";
import ExpertTracker from "../../Assets/Projects/export.gif";
import MyBeautyAI from "../../Assets/Projects/MyBeautyAI.png";
import CreatorMatchingEngine from "../../Assets/Projects/CreatorMatchingEngine.png";
import localizationAgent from "../../Assets/Projects/localization.gif";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>

                {/* Team Projects Section */}
                <h1 className="project-heading" style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "50px", textAlign: "left" }}>
                    Team <strong className="purple">Projects</strong> (AI & Data)
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Project 3: Job AI */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={JobAI}
                            isBlog={false}
                            title="Job AI: Practical Interview Skills Enhancement Service"
                            summary="Azure 기반 가상 면접관 인터뷰 연습 솔루션"
                            description="Developed an Azure-based interview avatar solution (STT/TTS). Awarded the MS AI School 7th Final Project Prize. Applied RAG technology to DART business reports, improving model accuracy from 62% to 94%. Stack: Azure(Storage, AI Search, OpenAI), RAG(LlamaIndex), DuckDuckGo Search"
                            ghLink="https://github.com/project-ares-interview"
                        />
                    </Col>

                    {/* Project 4: ai-bo */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={AI_bo}
                            isBlog={false}
                            title="AI Insurance Consultation Chatbot (ai-bo)"
                            summary="950쪽 분량의 복잡한 보험 약관을 해석해주는 AI 챗봇"
                            description="Children's Insurance Policy Interpreter. Led the development of a chatbot interpreting 950 pages of complex insurance terms using Azure OpenAI/GPT-4o. Addressed low comprehension rates (12%) and high claim error rates (47%)."
                            ghLink="https://github.com/howl-papa/ai-bo"
                        />
                    </Col>
                </Row>

                {/* Personal Projects Section */}
                <h1 className="project-heading" style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "left" }}>
                    Personal <strong className="purple">Projects</strong> (AI & Data for Beauty)
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Project: Beauty Insight Lab MVP */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={localizationAgent}
                            isBlog={false}
                            title="Localization Translation AI-Agent"
                            summary="뷰티 브랜드의 미국 진출을 돕는 마케팅 현지화 번역 에이전트"
                            description="AI Agent responsible for 'Translation-Agent' logic and strategic verification. Designed exclusively for the Korean Beauty (K-Beauty) industry entering the US Market. It moves beyond simple language translation to perform Marketing Transcreation. Stack: Python (FastAPI), Poetry"
                            ghLink="https://github.com/Beauty-Insight-Lab-Inc/Beauty-Insight-Lab-Showcase"
                            demoLink="https://www.beautyinsightlab.com/localization"
                        />
                    </Col>
                    {/* Project 1: K-Beauty Export Tracker */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={ExpertTracker}
                            isBlog={false}
                            title="Export Tracker Dashboard"
                            summary="K-뷰티 수출 가격과 유통 채널을 한눈에 보는 대시보드"
                            description="Global Retail Scaler | Developed a dashboard to help small-scale K-Beauty brands monitor export unit prices and distribution channels to prevent revenue loss. Stack: Next.js, Tailwind CSS, TypeScript"
                            ghLink="https://github.com/Beauty-Insight-Lab-Inc/Beauty-Insight-Lab-Showcase"
                            demoLink="https://www.beautyinsightlab.com/"
                        />
                    </Col>

                    {/* Project 2: Creator Campaign Matching Engine */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={CreatorMatchingEngine}
                            isBlog={false}
                            title="Creator Campaign Matching Engine"
                            summary="브랜드 '결'과 데이터를 결합한 인플루언서 마케팅 ROI 예측 "
                            description="Hybrid Filtering Matchmaking Engine Prototype (PoC). Built a matchmaking engine combining quantitative data (followers, views) with qualitative brand attributes (Contextual Fit) to predict campaign ROI. Developed an ROI prediction model to solve the problem of low matching accuracy. Stack: Random Forest Regressor, PostgreSQL, Scikit-learn"
                            ghLink="https://github.com/Beauty-Insight-Lab-Inc/AI-Creator-Matching-Engine-Prototype-"
                        />
                    </Col>

                    {/* Project 5: My Beauty AI */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={MyBeautyAI}
                            isBlog={false}
                            title="Personalized Skincare Routine Design"
                            summary="화장품 전성분을 통한 개인 맞춤형 스킨케어 루틴 데이터셋 구축"
                            description="AI Skin Care Routine Dataset Construction. Developed an AI consultation service based on full ingredient analysis using LlamaIndex RAG and PostgreSQL. Constructed a cosmetic ingredient database to analyze conflicts and optimize skincare routines."
                            ghLink="https://github.com/howl-papa/my-beauty-ai-skincare"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
