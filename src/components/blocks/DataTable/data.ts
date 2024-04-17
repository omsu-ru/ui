import { faker } from "@faker-js/faker";
import { SortingState } from "@tanstack/react-table";
import {
  AtomIcon,
  BadgeDollarSignIcon,
  BinaryIcon,
  BrushIcon,
  FlaskConicalIcon,
  Globe2Icon,
  MicIcon,
  ScaleIcon,
} from "lucide-react";

export type Professor = {
  name: string;
  email: string;
  faculty: string;
  [key: string]: any;
};

export const faculties = [
  {
    value: "FDTC", // Faculty of Digital Technologies and Cybersecurity
    label: "Факультет цифровых технологий и кибербезопасности",
    abbr: "ФЦТК",
    icon: BinaryIcon,
  },
  {
    value: "FCA", // Faculty of Culture and Arts
    label: "Факультет культуры и искусств",
    icon: BrushIcon,
    abbr: "ФКИ",
  },
  {
    value: "FPTM",
    label: "Факультет филологии, переводоведения и медиакоммуникаций", //Faculty of Philology, Translation Studies and Media Communications
    abbr: "ФФПиМК",
    icon: MicIcon,
  },
  {
    value: "FHTI", // Faculty of History, Theology and International Relations
    label: "Факультет истории, теологии и международных отношений",
    abbr: "ФИТМО",
    icon: Globe2Icon,
  },
  {
    value: "FEPM", // Faculty of Psychology, Economy and Management
    label: "Факультет экономики, психологии, менеджмента",
    icon: BadgeDollarSignIcon,
    abbr: "ФЭПМ",
  },
  { value: "FP", label: "Физический факультет", icon: AtomIcon, abbr: "ФФ" }, // Faculty of Physics
  {
    value: "FC", // Faculty of Chemistry
    label: "Химический факультет",
    icon: FlaskConicalIcon,
    abbr: "ХФ",
  },
  { value: "FL", label: "Юридический факультет", icon: ScaleIcon, abbr: "ЮФ" }, // Faculty of Law
];

const pickRandomFaculty = (): string => {
  const randomIndex = Math.floor(Math.random() * faculties.length);
  return faculties[randomIndex].label;
};

export const departments = [
  {
    value: "journalism",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра журналистики и медиалингвистики",
  },
  {
    value: "foreignLanguages",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра иностранных языков для специальных целей",
  },
  {
    value: "linguisticsAndTranslation",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра лингвистики и перевода",
  },
  {
    value: "russianLiteratureAndDocumentalCommunication",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра русского языка, литературы и документных коммуникаций",
  },
  {
    value: "appliedLinguistics",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра теоретической и прикладной лингвистики",
  },
  {
    value: "languageTrainingMethods",
    faculty: "FPTM", // Faculty of Philology, Translation Studies and Media Communications
    label: "Кафедра теории и методики обучения иностранным языкам",
  },
  {
    value: "generalHistory",
    faculty: "FHTI", // Faculty of History, Theology and International Relations
    label: "Кафедра всеобщей истории",
  },
  {
    value: "historyAndIntlRelations",
    faculty: "FHTI", // Faculty of History, Theology and International Relations
    label: "Кафедра истории и теории международных отношений",
  },
  {
    value: "nationalHistorySociologyAndPoliticalScience",
    faculty: "FHTI", // Faculty of History, Theology and International Relations
    label: "Кафедра отечественной истории, социологии и политологии",
  },
  {
    value: "theologyPhilosophyAndCulturalScience",
    faculty: "FHTI", // Faculty of History, Theology and International Relations
    label: "Кафедра теологии, философии и культурологии",
  },
  {
    value: "adaptiveAndPhysicalCulture",
    faculty: "FHTI", // Faculty of History, Theology and International Relations
    label: "Кафедра адаптивной и физической культуры",
  },
  {
    value: "musicalArt",
    faculty: "FCA", // Faculty of Culture and Arts
    label: "Кафедра музыкального искусства",
  },
  {
    value: "theatricalArt",
    faculty: "FCA", // Faculty of Culture and Arts
    label: "Кафедра театрального искусства и социокультурных процессов",
  },
  {
    value: "directionAndChoreography",
    faculty: "FCA", // Faculty of Culture and Arts
    label: "Кафедра режиссуры и хореографии",
  },
  {
    value: "informationSecurity",
    faculty: "FDTC", // Faculty of Digital Technologies and Cybersecurity
    label: "Кафедра информационной безопасности",
  },
  {
    value: "mathAndSoftware",
    faculty: "FDTC", // Faculty of Digital Technologies and Cybersecurity
    label: "Кафедра компьютерной математики и программного обеспечения",
  },
  {
    value: "ITandNetwork",
    faculty: "FDTC", // Faculty of Digital Technologies and Cybersecurity
    label: "Кафедра компьютерных технологий и сетей",
  },
  {
    value: "appliedMath",
    faculty: "FDTC", // Faculty of Digital Technologies and Cybersecurity
    label: "Кафедра фундаментальной и прикладной математики",
  },
  {
    value: "economicsAndFinance",
    faculty: "FEPM", // Faculty of Psychology, Economy and Management
    label: "Кафедра экономики и финансов",
  },
  {
    value: "regionalEconomyAndHumanResourcesManagement",
    faculty: "FEPM", // Faculty of Psychology, Economy and Management
    label:
      "Кафедра региональной экономики и управления человеческими ресурсами",
  },
  {
    value: "managementAndMarketing",
    faculty: "FEPM", // Faculty of Psychology, Economy and Management
    label: "Кафедра менеджмента и маркетинга",
  },
  {
    value: "economicAnalysisAndRegionalStudies",
    faculty: "FEPM", // Faculty of Psychology, Economy and Management
    label:
      "Кафедра экономической аналитики и региональных исследований на базе ОНЦ СО РАН",
  },
  {
    value: "generalAndSocialPsychology",
    faculty: "FEPM", // Faculty of Psychology, Economy and Management
    label: "Кафедра общей и социальной психологии",
  },
  {
    value: "radioElectronicSystems",
    faculty: "FP", // Faculty of Physics
    label: "Кафедра моделирования радиоэлектронных систем",
  },
  {
    value: "generalAndExperimentalPhysics",
    faculty: "FP", // Faculty of Physics
    label: "Кафедра общей и экспериментальной физики",
  },
  {
    value: "theoreticalPhysics",
    faculty: "FP", // Faculty of Physics
    label: "Кафедра теоретической физики",
  },
  {
    value: "physicsOfNanomaterialsAndBiotechnicalSystems",
    faculty: "FP", // Faculty of Physics
    label: "Кафедра физики наноматериалов и биотехнических систем",
  },
  {
    value: "organicAndAnalyticalChemistry",
    faculty: "FC", // Faculty of Chemistry
    label: "Кафедра органической и аналитической химии",
  },
  {
    value: "inorganicChemistry",
    faculty: "FC", // Faculty of Chemistry
    label: "Кафедра неорганической химии",
  },
  {
    value: "stateAndMunicipalLaw",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра государственного и муниципального права",
  },
  {
    value: "civilAndArbitrationProcedure",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра гражданского и арбитражного процесса",
  },
  {
    value: "civilLaw",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра гражданского права",
  },
  {
    value: "labourAndSocialLaw",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра трудового и социального права",
  },
  {
    value: "stateTheoryAndLaw",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра теории государства и права",
  },
  {
    value: "criminalLawAndCriminology",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра уголовного права и криминологии",
  },
  {
    value: "criminalProcedureAndCriminalisticslLawAndCriminology",
    faculty: "FL", //  Faculty of Law
    label: "Кафедра уголовного процесса и криминалистики",
  },
];

const pickRandomDepartment = (): string => {
  const randomIndex = Math.floor(Math.random() * departments.length);
  return departments[randomIndex].label;
};

const newPerson = (): Professor => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    faculty: pickRandomFaculty(),
    department: pickRandomDepartment(),
  };
};

const generateProfessorsArray = (count: number) =>
  Array.from({ length: count }, newPerson);

const data = generateProfessorsArray(10000);

type RequestData = {
  pageIndex: number; // Номер страницы
  pageSize: number; // Колл-во резултатов/рядов на странице
  columnFilters: Array<{ id: string; value: unknown }>; // Фильтры колонок. Например, по колонке факультетов. Если typeof value === 'array', то это фильтр по значениям. Если typeof value === string, то это поисковый запрос
  sorting: Array<{ id: string; desc: boolean }>; // Фильтры сортировке. Например, сортируем колонку ФИО (id: name) по убыванию (desc: true)
};

type ResponseData = {
  totalRecords: number; // колл-во результатов/рядов
  records: unknown; // отфильтрованные результаты
};

export async function fetchData(
  page: number,
  count: number,
  columnFilters: { id: string; value: unknown }[],
  sorting: SortingState
) {
  console.log({ columnFilters });
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  const filteredData = data.filter((item) => {
    return columnFilters.every((filter) => {
      const { id, value } = filter;
      if (typeof value === "string") {
        // If the value is a string, perform a search by id and text.
        return item[id]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase().trim());
      } else if (Array.isArray(value)) {
        // If the value is an array, check if the id is included in the value array.
        if (id === "faculty") {
          const faculty = faculties.find(
            (faculty) => faculty.label === item[id]
          );
          return value.includes(faculty.label);
        }
      }
      return true; // If the filter value is not a string or array, ignore this filter.
    });
  });

  // Sorting
  const sortData = (a: any, b: any, sort: any) => {
    for (let i = 0; i < sort.length; i++) {
      const { id, desc } = sort[i];
      if (a[id] < b[id]) {
        return desc ? 1 : -1;
      }
      if (a[id] > b[id]) {
        return desc ? -1 : 1;
      }
    }
    return 0;
  };

  const sortedFilteredData = filteredData.sort((a, b) =>
    sortData(a, b, sorting)
  );

  // Apply pagination after filtering and sorting.
  return sortedFilteredData;
}
