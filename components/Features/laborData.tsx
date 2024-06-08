import { Feature } from "../../types/feature";
import Image from "next/image";

const laborData: Feature[] = [
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/sttaf.png" height={40} width={40} alt="staff" />,
    title: "Temporary and Permanent Staffing",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/labor.png" height={40} width={40} alt="labor" />,
    title: "Skilled and Unskilled Labor",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  }, {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/projectbase.png" height={40} width={40} alt="projectbase" />,
    title: "Project-Based Labor Support",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/construction.png" height={40} width={40} alt="construction" />,
    title: "Construction Labor",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: <Image  className="dark:bg-blue-500 dark:m-2 dark:rounded-sm" src="/images/icons/idustrial.png" height={40} width={40} alt="industrial" />,
    title: "Industrial Labor",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },




];
export default laborData;
