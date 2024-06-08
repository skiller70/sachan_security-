import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/security.png" height={40} width={40} alt="security" />,
    title: "On-Site Security Guards",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/patrol.png" height={40} width={40} alt="patrol" />,
    title: "Mobile Patrol Services",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/event.png" height={40} width={40} alt="event" />,
    title: "Event Security",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/cctv.png" height={40} width={40} alt="cctv" />,
    title: "CCTV Monitoring and Surveillance",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/alarm.png" height={40} width={40} alt="alarm" />,
    title: "Alarm Response Services",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
 
];
export default featuresData;
