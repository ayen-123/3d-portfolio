import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Project
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
  dlib: brand("dlib", "dlib-mono.svg"),
  opencv: brand("OpenCV", "opencv-mono.svg"),
  scipy: brand("SciPy", "scipy-mono.svg"),
  pygame: brand("Pygame", "pygame-mono.svg"),
  imutils: brand("imutils", "imutils-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  arduino: brand("Arduino", "arduino-mono.svg"),
  circuit: brand("Circuit", "circuit-mono.svg"),
  microcontroller: brand("Microcontroller", "microcontroller-mono.svg"),
  digitalElectronics: brand("Digital Electronics", "digital-electronics-mono.svg"),
  microsoftOffice: brand("Microsoft Office", "microsoft-office-mono.svg"),
  touchTyping: brand("Touch Typing", "touch-typing-mono.svg"),
  cplusplus: brand("C++", "cplusplus-mono.svg"),
  embeddedSystems: brand("Embedded Systems", "embedded-system-mono.svg"),
  iot: brand("IoT", "iot-mono.svg"),
  css: brand("CSS", "css-mono.svg"),
  wtforms: brand("WTForms", "wtforms-mono.svg"),
  flask: brand("Flask", "flask-mono.svg"),
  sqlachemy: brand("SQLAlchemy", "sqlalchemy-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
  uiux: brand("UI/UX", "uiux-mono.svg"),
  userlogin: brand("User Login", "userlogin-mono.svg"),
  html: brand("HTML", "html-mono.svg"),
  bcrypt: brand("Bcrypt", "bcrypt-mono.svg"),
  jinja2: brand("Jinja2", "jinja2-mono.svg"),
  databaseManagement: brand("Database Management", "database-management-mono.svg"),
  bootstrap: brand("Bootstrap", "bootstrap-mono.svg"),
  csharp: brand("C#", "csharp-mono.svg"),
  wpf: brand("WPF", "wpf-mono.svg"),
  xaml: brand("XAML", "xaml-mono.svg"),
  mvvm: brand("MVVM", "mvvm-mono.svg"),
  dotnet6: brand(".NET 6", "dotnet-mono.svg"),
  rpi: brand("Raspberry Pi", "raspberry-pi-mono.svg"),
  numpy: brand("NumPy", "numpy-mono.svg"),
  haarcascade: brand("Haar Cascade", "haarcascade-mono.svg"),
  serialread: brand("Serial Read", "serialread-mono.svg"),
  linux: brand("Linux", "linux-mono.svg"),
  smsconfig: brand("SMS Config", "smsconfig-mono.svg"),
  imageprocessing: brand("Image Processing", "imageprocessing-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: Skill[];
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "dsp",
    category: "Image Processing",
    title: "Eye-Closures Monitoring Using Image Processing",
    src: "/assets/projects-screenshots/dsp/facelandmark68.png",
    screenshots: ["facelandmark68.png"],
    skills: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.dlib,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.scipy,
        PROJECT_SKILLS.pygame,
        PROJECT_SKILLS.imutils,
        PROJECT_SKILLS.imageprocessing,
      ],
    live: "https://github.com/ayen-123/Eye-Closure-Detection.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Image Processing System for Real-Time Detection of Eye Closure to Monitor Fatigue
          </TypographyP>
          <TypographyP className="font-mono ">
            Fatigue is a significant issue that affects individuals in various fields, including transportation, healthcare, and industrial work. It is a condition that results from prolonged mental or physical exertion, leading to reduced cognitive function, slower reaction times, impaired judgment, and decreased overall performance. The dangers of fatigue are especially pronounced in high-risk environments such as long-haul trucking, aviation, and medical professions, where lapses in attention and delayed responses can have catastrophic consequences. 
            One of the primary indicators of fatigue is the involuntary closing of the eyes. Research shows that individuals experiencing drowsiness have reduced eyelid movement control, leading to frequent blinking and eye closures. This behavioral sign is recognized as a reliable measure of drowsiness, making it a crucial factor in fatigue detection systems.
            Automating fatigue detection through eye-closing monitoring can enhance safety and efficiency by eliminating the need for manual observation. Traditional fatigue detection methods often rely on self-reporting or manual monitoring by supervisors and are prone to human error and inconsistencies . An automated system ensures real-time, objective monitoring, which can be crucial in environments where constant vigilance is required, such as driving, aviation, and high-risk industrial tasks.
            The proposed system will utilize OpenCV, an open-source computer vision library, along with dlib for facial and eye detection. The Eye Aspect Ratio (EAR) method will be used to calculate the proportion of eye openness and detect drowsiness. A higher EAR value indicates that the eye is open, whereas a lower EAR value indicates that the eye is closed. By integrating these image processing techniques, the system will provide accurate and efficient fatigue detection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Methodology</TypographyH3>
          <p className="font-mono mb-2">
            To accomplish this project, coding and programming were done using Visual Studio Code as the primary code compiler and Python as the programming language. To facilitate real-time image processing, several Python packages were installed via the Command Prompt, including OpenCV, dlib, Imutils, Scipy, and Pygame. These packages provided the necessary functions for facial detection, landmark prediction, spatial analysis, and alarm playback.
            Following the environment setup, two key resources were added to the project directory. These files include an alarm sound file (alarm.mp3) and dlib’s pre-trained facial landmark detector (shape_predictor_68_face_landmarks.dat). These files were critical in supporting drowsiness detection and fatigue alerts. 
            The core logic of the program is structured to handle continuous video input and analyze each frame in real-time. The calculated EAR values for the left and right eyes are averaged to ensure robustness. A flag counter is used to keep track of how many consecutive frames the EAR remains below the threshold, distinguishing between natural blinking and potential fatigue. If the threshold is crossed and the flag count exceeds the limit, a visual warning text—"FATIGUE DETECTED"—appears on the screen, and the alarm is played unless it is already active. Conversely, if the EAR rises above the threshold before the frame count limit is met, the flag is reset and the alarm stops, maintaining system responsiveness and reducing false alarms. The real-time EAR value is also displayed on the screen to provide live feedback to the user.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dsp/system_flowchart.png`,
              `${BASE_PATH}/dsp/block_diagram.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Simulation</TypographyH3>
          <p className="font-mono mb-2">
           This project, a real-time image processing of eye closing for fatigue detection, was developed and tested using Visual Studio Code, a source code editor that provides a programming environment for developers. This platform allowed for the application and integration of Python, OpenCV, and dlib, which were essential for facial detection and eye landmark tracking. The HP Pavilion laptop served as the hardware component, with its webcam capturing the live video input for real-time processing. The system continuously analyzed the user's eye openness and determined potential fatigue.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dsp/illustration.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "ict",
    category: "Outreach Program",
    title: "ICT Educational Workshop at T’boli Sbu Senior High School, South Cotabato",
    src: "/assets/projects-screenshots/ict/visit.jpg",
    screenshots: ["visit.jpg"],
    skills: [
      PROJECT_SKILLS.microsoftOffice,
      PROJECT_SKILLS.touchTyping,
    ],
    live: "https://www.facebook.com/share/p/1EpmCs6E97/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Outreach Initiative to Improve Digital Literacy among Indigenous Students
          </TypographyP>
          <TypographyP className="font-mono ">
            The T’boli Sbu' Senior High School in Lake Sebu, South Cotabato, faces significant challenges that hinder the effectiveness of its learning environment which is the limited access of students to basic digital literacy skills. Many students at T’boli Sbu' SHS have minimal exposure to computers and essential software such as Microsoft Office. With digital literacy becoming increasingly crucial in both academic and professional settings, the gap in ICT education presents a disadvantage to these students in their future endeavors. Without foundational skills in word processing, spreadsheets, presentations, and touch typing, students may struggle with research, documentation, and communication tasks. These challenges prompted the need not only to repair and enhance the initial clock and bell system but also to conduct ICT educational workshops, equipping the students with practical skills they can carry forward in their academic and career paths.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Digital Literacy Workshop
          </TypographyH3>
          <p className="font-mono mb-2">
            A series of ICT educational workshops was designed and implemented to help students build essential digital skills. These workshops focused on introducing Microsoft Word, PowerPoint, and Excel. Additionally, students were taught touch typing skills to improve their typing speed and accuracy, which are valuable in both academic and future professional settings. By providing students with hands-on experience and guided activities, the project empowers them to use technology more confidently and effectively, helping bridge the digital divide and prepare them for a technology-driven world. The project will be implemented at the Tboli Sbù Senior High School (TSSHS), located in Barangay Lamdalag, Lake Sebu, South Cotabato, Davao City. The school was chosen as its teaching staff have informed as of the need for workshops for digital applications that would greatly help in their students' outputs. Activities will be held within the school premises to ensure ease of access and practical use in a daily school setting.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ict/pictorial.jpg`,
              `${BASE_PATH}/ict/visit.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "bellclock",
    category: "Embedded System",
    title: "Timekeeper",
    src: "/assets/projects-screenshots/timekeeper/device.jpg",
    screenshots: ["device.jpg"],
    skills: [
      PROJECT_SKILLS.cplusplus,
      PROJECT_SKILLS.arduino,
      PROJECT_SKILLS.circuit,
      PROJECT_SKILLS.microcontroller,
      PROJECT_SKILLS.digitalElectronics,
      PROJECT_SKILLS.embeddedSystems,
      PROJECT_SKILLS.iot,
    ],
    live: "https://www.facebook.com/share/p/19QcaZqbVX/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Automated Bell and Digital Clock System using Arduino Microcontroller for T’boli Sbu' Senior High School
          </TypographyP>
          <TypographyP className="font-mono ">
            The idea of the 'TimeKeeper: Automated School Bell and Clock System' stemmed from the challenges faced by Tboli Sbu' Senior High School in managing class transitions. The reliance on a manually operated gong, which is prone to human error and inconsistency, highlighted the need for a more efficient solution. Insights were gathered from teachers and staff, emphasizing the need for automation to improve class schedules and reduce the workload on faculty. As the concept evolved, the goal was to create a centralized system that integrates technology to address these issues. Key considerations, such as accessibility, scalability, and the use of Arduino UNO technology, shaped the initial vision, ensuring the system would be practical, cost-effective, and beneficial for the school, ensuring the project would be practical for the communities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Project Implementation
          </TypographyH3>
          <p className="font-mono mb-2">
            The execution phase began with assembling the hardware, starting with the construction of the system box, followed by the installation of components, wiring connections, and the integration of the microcontroller into the overall system. The Arduino was then programmed to automate the bell schedule and enable SMS-based scheduling adjustments. Initial testing was conducted in controlled environments to ensure the system's reliability and ease of use. On November 20, 2024, the system was successfully installed at Tboli Sbu' Senior High School, with careful calibration to align the system with the school’s class schedule. However, during the turnover, unexpected issues arose, necessitating troubleshooting on the same day. To ensure smooth operation, a user manual and a hands-on session were provided to the faculty, familiarizing them with the system’s functions and maintenance procedures. Key achievements incuded the successful implementation of the automated bell and clock system, a significant reduction in teacher workload, and positive feedback from the school community. The final outcome showcased a seamless integration of technology into the school’s daily operations, effectively solving the original challenges.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/timekeeper/turnover.jpg`,
              `${BASE_PATH}/timekeeper/device.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "autoquest",
    category: "Web Platform",
    title: "AutoQuest",
    src: "/assets/projects-screenshots/autoquest/home.png",
    screenshots: ["home.png"],
    skills: [ 
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.wtforms,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.sqlachemy,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.uiux,
        PROJECT_SKILLS.userlogin,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.bcrypt,
        PROJECT_SKILLS.jinja2,
        PROJECT_SKILLS.databaseManagement,
        PROJECT_SKILLS.bootstrap,
      ],
    live: "https://github.com/ayen-123/AutoQuest.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Flask-based Car Rental and Reservation Web Application
          </TypographyP>
          <TypographyP className="font-mono ">
            AutoQuest is a server-rendered web application for managing a car rental service. It provides searchable vehicle listings, a booking (rent) workflow with pickup/drop-off handling, promotions, user registration with role differentiation (customer / employee), and simple profile/phone management. The app is built with Flask and SQLAlchemy and uses WTForms for input validation; most of the UI is implemented as HTML templates with lightweight JavaScript where needed. The codebase is structured so the data model, forms, and routes are easy to find and extend.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">
            Impressive Vehicle Catalog and Booking System
          </TypographyH3>
          <p className="font-mono mb-2">
           Users can search and filter cars by make, model, year, color, license plate, or class; shop view returns car objects and prices joined with CarClass. Per-car information and associated class/price details are rendered on a dedicated car info page. Authenticated users can register a rent for a selected car (pickup/drop-off, odometer, gas level, rental dates); the Rent form validates odometer and dates. Promotional records are tied to car classes and filtered by rental dates; promos are selectable in the booking UI and applied to pricing calculations. There are also Role-based users (customers vs employees). create_user factory creates Customer or Employee instances based on verification codes; Employee records include assigned location and category. Users can update profile information and add/delete phone numbers; phone numbers are validated for format in routes/forms. Admin setup is initialized on startup (static/admin.py) for administrative tasks and interfaces. Server-side validation and protected routes are built in. Forms are validated with WTForms and routes are protected with Flask-Login decorators (login_required).
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/autoquest/landing.png`,
              `${BASE_PATH}/autoquest/catalog.png`,
              `${BASE_PATH}/autoquest/login.png`,
              `${BASE_PATH}/autoquest/registration.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "meditrack",
    category: "WPF Desktop App",
    title: "MediTrack",
    src: "/assets/projects-screenshots/meditrack/home.png",
    screenshots: ["home.png"],
    skills: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.wpf,
        PROJECT_SKILLS.xaml,
        PROJECT_SKILLS.mvvm,
        PROJECT_SKILLS.dotnet6,
        PROJECT_SKILLS.uiux,
        PROJECT_SKILLS.userlogin,
      ],
    live: "https://github.com/ayen-123/MediTrack.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A WPF C# Hospital Management Desktop Application for Patients and Doctors
          </TypographyP>
          <TypographyP className="font-mono ">
            MediTrack is a WPF C# hospital management system designed to simplify and centralize patient information, forms, appointments, and billing. The application provides patients an accessible, user-friendly interface to manage their records, schedule appointments, choose doctors, fill digital medical forms, and view/pay hospital bills. MediTrack aims to improve patient engagement by letting users control their health-related interactions and reduce paper-based processes in clinical settings. It is intended as a desktop application running on Windows with an extensible structure for data storage and integrations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            WPF MVVM Architecture and Data Management
          </TypographyH3>
          <p className="font-mono mb-2">
            MediTrack is built as a WPF desktop application using a separation of concerns typical for WPF apps: Views (XAML) define UI layout and styling, ViewModels (C#) expose data-binding properties and commands, and Models represent core domain objects such as Patient, Doctor, Appointment, and Invoice. Input validation and form logic are implemented in form ViewModels; navigation is provided via a main shell window with a side navigation panel. The data access layer is intentionally modular so local file storage (JSON/XML) or an embedded database can be used; configuration files contain connection details so the storage backend can be swapped. The billing UI is designed to surface payment fields and transaction history, but real payment gateway integration should be added with secure handling. Development typically uses Visual Studio for rapid UI design, debugging, and packaging; code is organized into logical namespaces for Views, ViewModels, Models, and Services.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/meditrack/1.png`,
              `${BASE_PATH}/meditrack/2.png`,
              `${BASE_PATH}/meditrack/3.png`,
              `${BASE_PATH}/meditrack/4.png`,
            ]}         
          /> 
        </div>
      );
    },
  },
  {
    id: "thesis",
    category: "Embedded System",
    title: "Real-Time Driver Drowsiness Detection and Heart Rate Monitoring System for Taxi Fleets",
    src: "/assets/projects-screenshots/research/3.png",
    screenshots: ["3.png"],
    skills: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.dlib,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.scipy,
        PROJECT_SKILLS.pygame,
        PROJECT_SKILLS.imutils,
        PROJECT_SKILLS.microcontroller,
        PROJECT_SKILLS.digitalElectronics,
        PROJECT_SKILLS.embeddedSystems,
        PROJECT_SKILLS.iot,
        PROJECT_SKILLS.rpi,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.haarcascade,
        PROJECT_SKILLS.serialread,
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.smsconfig,
        PROJECT_SKILLS.imageprocessing,
      ],
    live: "https://github.com/ayen-123/Real-Time-Driver-Drowsiness-Detection-and-Heart-Rate-Monitoring-System.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
           A Raspberry Pi-based Real-Time Driver Drowsiness Monitoring System for Taxi Drivers- Using Facial Features and Heart Rate Data
          </TypographyP>
          <TypographyP className="font-mono ">
            Driver fatigue is one of the leading causes of road accidents worldwide, particularly among taxi drivers who often work long and irregular hours. This project presents a real-time driver monitoring system that combines computer vision and physiological monitoring to identify signs of drowsiness before they lead to accidents. The system utilizes facial feature analysis through Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR), alongside heart rate monitoring from a wearable device, to assess the driver's condition. Upon detecting fatigue, the system immediately alerts the driver and escalates repeated incidents to taxi fleet operators through SMS notifications. The goal of the project is to improve road safety, reduce fatigue-related accidents, and provide fleet operators with an additional layer of driver monitoring and intervention.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Real-Time Facial Feature and Heart Rate Monitoring with Immediate Alerts
          </TypographyH3>
          <p className="font-mono mb-2">
            The system begins by initializing the camera and wearable heart rate monitoring device. Once both devices are connected and operational, the camera continuously captures video frames of the driver while the smartwatch streams heart rate data to the Raspberry Pi. Using OpenCV and Dlib, the system detects the driver's face and extracts facial landmarks. These landmarks are used to calculate Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR), which serve as indicators of eye closure and yawning behavior. Simultaneously, heart rate readings are evaluated against predefined thresholds. The system continuously processes all inputs in real time. If the driver's eyes remain closed for a prolonged period, if excessive yawning is detected, or if heart rate patterns indicate possible fatigue, the system classifies the driver as drowsy and immediately activates an alarm. Every drowsiness event is logged by the system. If the number of drowsiness alerts exceeds a predefined threshold within a monitoring period, an SMS notification is sent to the taxi fleet operator. This notification serves as an escalation mechanism, allowing management to intervene before a fatigue-related accident occurs. The monitoring process continues as long as the vehicle remains operational, ensuring continuous observation of the driver's condition throughout the trip.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/research/1.jpg`,
              `${BASE_PATH}/research/2.jpg`,
              `${BASE_PATH}/research/3.png`,
              `${BASE_PATH}/research/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  
];
export default projects;
