import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SlideShow from "@/components/slide-show";

const BASE_PATH = "/assets/recognitions-photos"; 

const RecognitionLink = ({ link }: { link?: string }) => {
  if (!link || link === "#") return null;
  return (
    <div className="flex items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={link}
      >
        <Button variant={"default"} size={"sm"}>
          View
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Recognition = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  content: React.ReactNode | any;
  link?: string;
};

const recognitions: Recognition[] = [
  {
    id: "sci26",
    category: "International Award",
    title: "Best Paper Awardee at the  8th International Conference on Smart Computing and Informatics (SCI-2026)",
    src: `/assets/recognitions-photos/sci26.png`, 
    screenshots: ["sci26.png"],
    link: "https://www.facebook.com/share/p/1DowMVAB58/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Best Paper Awardee for my Research "A Real-Time Driver Drowsiness Detection and Heart Rate Monitoring System for Taxi Fleets"
          </TypographyP>
          <TypographyP className="font-mono">
            I presented my undergraduate study at the 8th International Conference on Smart Computing and Informatics (SCI-2026), organized by Swinburne University of Technology in Vietnam held online on April 29, 2026. My research became a recipient of the "Best Paper Award" has been accepted for publication in Springer’s Lecture Notes in Networks and Systems (LNNS) series.
          </TypographyP>
          <RecognitionLink link={this.link} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/sci26-pubmat.jpg`,
              `${BASE_PATH}/sci26.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "icpep",
    category: "Regional Award",
    title: "Champion at the Institute of Computer Engineers of the Philippines Quiz Show Competition 2026",
    src: `/assets/recognitions-photos/qb_medal.jpg`, 
    screenshots: ["qb_medal.jpg"],
    link: "https://www.facebook.com/share/p/1AjKD6hCtJ/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Champion at the Regional Institute of Computer Engineers of the Philippines (ICpEP) Quiz Show Competition 2026
          </TypographyP>
          <TypographyP className="font-mono">
            On February 20-21 2026, I along with 2 of my classmates proudly represented Ateneo at the Regional ICpEP Quiz Bowl Competition held at Lyceum of the Philippines University in Davao City. 
            Competing against top universities across the region, we demonstrated outstanding technical skill, teamwork, and determination, earning the overall Champion title among all participating schools in the quiz bowl.
            I soon went on to represent Ateneo de Davao University at the national stage of the ICpEP Quiz Show Competition.
          </TypographyP>
          <RecognitionLink link={this.link} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/qb_photo.jpg`,
              `${BASE_PATH}/qb_medal.jpg`,
              `${BASE_PATH}/qb_national.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "tku",
    category: "International Award",
    title: "Student at the Tamkang University Physics Summer Camp",
    src: `/assets/recognitions-photos/Summer_Camp_Certificate.jpg`, 
    screenshots: ["Summer_Camp_Certificate.jpg"],
    link: "https://www.facebook.com/share/p/1CFjfKuTM5/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Had the honor of attending the Tamkang University Summer Camp Program held at Tamkang University in Tamsui District, Taiwan
          </TypographyP>
          <TypographyP className="font-mono">
            The program convened international students in a structured academic and cultural exchange that emphasized both intellectual growth and intercultural understanding.
            As an attendee, my role was to actively participate in the scheduled lectures, workshops, and cultural activities. The program was designed to introduce participants to Taiwanese culture,
            strengthen academic knowledge across different disciplines, and promote global collaboration among students and scholars.
            
            The key highlights of the program included a series of lectures from distinguished professors
            and researchers at Tamkang University. These academic sessions covered a wide range of
            advanced and emerging fields such as quantum computing, nanotechnology, material science,
            X-ray applications, industrial relations, energy materials, and computational matter. Each
            lecture offered valuable insights into the current frontiers of scientific research and
            technological innovation, broadening my understanding of the interconnectedness of these
            fields and their impact on society. In addition, cultural immersion activities—such as traditional
            art workshops, food appreciation events, and guided tours in Taipei and
            Tamsui—complemented the academic component by providing deeper appreciation of Taiwan’s
            history, traditions, and modern development.
           
            The Tamkang University Summer Camp Program was both an intellectual and
            cultural milestone. It provided me with advanced academic knowledge, strengthened my global
            perspective, and underscored the value of international cooperation in education and research.
            The program has equipped me not only with academic insights but also with meaningful
            cross-cultural experiences that will contribute significantly to my future academic and
            professional endeavors.
          </TypographyP>
          <RecognitionLink link={this.link} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/tku_1.JPG`,
              `${BASE_PATH}/tku_2.jpg`,
              `${BASE_PATH}/tku_3.JPEG`,
              `${BASE_PATH}/tku_4.JPG`,
              `${BASE_PATH}/tku_5.JPG`,
              `${BASE_PATH}/Summer_Camp_Certificate.jpg`,
            ]}
          />
        </div>
      );
    },
  },
];

export default recognitions;