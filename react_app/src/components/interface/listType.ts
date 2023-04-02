

export interface ListT  {
    renderError: string;
    heading: string;
    dataList: string[];
    onSelectFromList: (item: string) => void;
};