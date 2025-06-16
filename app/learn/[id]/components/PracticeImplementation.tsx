"use client";

import React, { useState } from "react";
import { PracticeItem } from "@/data/learning-path";
import { PracticeInput } from "./PracticeInput";
import { PracticeResultDisplay } from "./PracticeResultDisplay";
import { addLearningProgress } from "@/app/learn/utils/AddLearningProgress";

interface PracticeImplementationProps {
  item: PracticeItem;
}

export function PracticeImplementation({ item }: PracticeImplementationProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{error: string} | null>(null);
  const [progress, setProgress] = useState<{
    value: number;
    message: string;
  } | null>(null);

  const handleSubmit = async (
    preparationQuery: string,
    selectQuery: string,
  ) => {
    setSubmitted(true);
    setLoading(true);
    setResult(null);
    setProgress({ value: 0, message: "Starting evaluation..." });

    setResult({
      error: 'Evaluation of practical exercises is enabled only for the local execution of PostgreSQL Index Lab. Please visit https://github.com/MatyasUrban/index-lab for installation steps.',
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <PracticeInput onSubmitAction={handleSubmit} loading={loading} />
      <PracticeResultDisplay
        loading={loading}
        submitted={submitted}
        result={result}
        progress={progress}
      />
    </div>
  );
}
