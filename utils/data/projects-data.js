import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Face Attendance System (Computer Vision)',
        description: 'Designed and implemented a real-time face recognition computer vision pipeline utilizing FaceNet and OpenCV, achieving 98% accuracy. Developed high-performance RESTful APIs using FastAPI and SQLAlchemy to enable efficient real-time attendance tracking. Deployed a containerized system on Oracle Cloud with Docker, ensuring high availability, fault tolerance, and scalability.',
        tools: ['FaceNet', 'OpenCV', 'FastAPI', 'SQLAlchemy', 'Docker', 'Oracle Cloud', 'Python'],
        role: 'AI & Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Luna AI Assistant',
        description: 'Developed a high-performance, cross-platform desktop AI assistant using React/Tauri for the frontend and FastAPI for the backend logic. Engineered a real-time voice interaction pipeline featuring Voice Activity Detection (Silero VAD), local Speech-to-Text (faster-whisper), and Text-to-Speech (Piper). Integrated native OS-level controls allowing the AI to interact with system applications across macOS and Windows, and implemented complex file processing capabilities including real-time PDF parsing, computer vision, and local persistent memory for contextual conversations.',
        tools: ['React', 'TypeScript', 'Tauri', 'Python', 'FastAPI', 'WebSockets', 'Silero VAD', 'faster-whisper'],
        role: 'Full Stack & AI Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'VeritasAI - Deepfake & Synthetic Media Detection Platform',
        description: 'Architected a full-stack enterprise application to detect AI-generated media using a custom hybrid machine learning pipeline. Engineered a multi-heuristic backend with FastAPI, integrating PyTorch Vision Transformers for temporal frame classification and OpenCV (FFT) for structural anomaly detection. Developed a responsive, low-latency frontend using React, Vite, Tailwind CSS, and Framer Motion, featuring drag-and-drop file streaming and real-time visualization.',
        tools: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'HuggingFace', 'OpenCV', 'NumPy'],
        role: 'Full Stack & AI Architect',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Nexora - Real-Time Video Conferencing Platform',
        description: 'Designed and developed a scalable real-time communication system using Next.js and Stream SDK supporting 100+ concurrent users with low-latency streaming (<200ms). Achieved 25% reduction in latency through optimized state management and server-side rendering. Implemented secure authentication and role-based access control using Clerk.',
        tools: ['Next.js', 'Stream SDK', 'Clerk', 'React', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },