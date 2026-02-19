'use client';

import React, { useState, useRef } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQ {
    icon: string;
    question: string;
    answer: string | React.ReactNode;
}

interface FAQAccordionProps {
    faqs: FAQ[];
    title?: string;
    subtitle?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
    faqs,
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about our service"
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleToggle = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqHeader}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>

            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                    >
                        <div
                            className={styles.faqQuestion}
                            onClick={() => handleToggle(index)}
                            role="button"
                            aria-expanded={activeIndex === index}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleToggle(index);
                                }
                            }}
                        >
                            <div className={styles.questionWrapper}>
                                <div className={styles.questionIcon} aria-hidden="true">
                                    {faq.icon}
                                </div>
                                <span className={styles.questionText}>{faq.question}</span>
                            </div>
                            <div className={styles.chevronIcon} aria-hidden="true">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={styles.faqAnswer}
                            style={{
                                maxHeight: activeIndex === index
                                    ? `${answerRefs.current[index]?.scrollHeight}px`
                                    : '0'
                            }}
                        >
                            <div
                                ref={(el) => { answerRefs.current[index] = el; }}
                                className={styles.answerContent}
                            >
                                {typeof faq.answer === 'string' ? (
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                ) : (
                                    faq.answer
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
