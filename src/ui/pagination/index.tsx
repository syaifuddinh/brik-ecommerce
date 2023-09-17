import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import Button from "./button";
import LeftIcon from "assets/icons/chevron-left.svg";
import RightIcon from "assets/icons/chevron-right.svg";

type PaginationType = {
    length: number;
    page: number;
    onChange: (page: number) => void;
};

const initiatePage = { page: 1 };

const Pagination = ({ onChange, page, length }: PaginationType) => {
    const [pages, setPages] = useState([initiatePage]);
    const [section, setSection] = useState(() => {
        const result = Math.floor(page / 3);

        return result;
    });
    const [activePage, setActivePage] = useState(page);

    const getStartingIndex = (nextSection: number, limitLength: number) => {
        let outp: number = nextSection * limitLength
        if(outp > 0) outp -= nextSection;

        return outp;
    }

    const getNextSection = (oldSection: number, currentPages: any[], currentActivePage: number, currentSection: number) => {
        if(currentPages.length < 1) return section;
        let nextSection: number = 0;
        const currentPagesMaxIndex = currentPages.length - 1;
        if(currentPages.length === 1) nextSection = 0;
        // else if(currentPagesMaxIndex !== maxIndex) nextSection = 0;
        else if(currentActivePage < currentPages[0].page) nextSection = -1;
        else if(currentActivePage === currentPages[0].page && currentSection > 0) nextSection = -1; 
        else if(currentActivePage === currentPages[currentPagesMaxIndex].page) nextSection = 1;

        nextSection += oldSection;

        return nextSection;
    }

    const renderPageView = (currentActivePage: number, currentPages: any[]) => {
        if(length < 1) return;
        let result: any[] = [];
        let i: number = 0;
        const limitLength = 4;
        const nextSection = getNextSection(section, currentPages, currentActivePage, section);
        const startingIndex = getStartingIndex(nextSection, limitLength)
        const maxLength = length < limitLength + 1 ? length : startingIndex + limitLength;
        for(i = startingIndex;i < maxLength; i++) {
            result = [...result, { page: i + 1 }];
        }
        setSection(nextSection);
        setPages(result);
    }

    useMemo(() => {
        renderPageView(activePage, pages);
    }, [length])

    const onClick = (val: number) => {
        if(val === activePage) return;
        setActivePage(val);
        renderPageView(val, pages);
        onChange(val);
    }

    const onNext = () => {
        if(activePage === length) return;
        onClick(activePage + 1);
    }

    const onPrev = () => {
        if(activePage === 1) return;
        onClick(activePage - 1);
    }

    return (
        <div
            className={"pagination"}
        >
            <Button
                onClick={() => onPrev()}
            >
                <img
                    src={LeftIcon}
                    alt="left-icon"
                />
            </Button>

            { pages.map((item: any) => (
                <Button
                    key={item.page}
                    isActive={item.page === activePage}
                    onClick={() => onClick(item.page)}
                >
                    { item.page }
                </Button>
            )) }

            <Button
                onClick={() => onNext()}
            >
                <img
                    src={RightIcon}
                    alt="right-icon"
                />
            </Button>
        </div>
    )
}

export default Pagination;