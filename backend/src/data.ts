export enum AssessmentType {
    PEOPLE = 'people',
    PROCESS = 'process',
    TECHNOLOGY = 'technology',
}

export const data: Data = {
  assessment: [
        {
            "number":1,
            "indicator":"Crucial Roles (Top Management Support)",
            "level":"initial",
            "score":10,
            "type": AssessmentType.PEOPLE
        },
        {
            "number":2,
            "indicator":"Integrated Business Process",
            "level":"initial",
            "score":10,
            "type": AssessmentType.PROCESS
        },
        {
            "number":3,
            "indicator":"ERP System",
            "level":"defined",
            "score":30,
            "type":AssessmentType.TECHNOLOGY
        }
    ]
};

interface Data {
  assessment: {
    number: number;
    indicator: string;
    level: string;
    score: number;
    type: AssessmentType;
  }[];
}
