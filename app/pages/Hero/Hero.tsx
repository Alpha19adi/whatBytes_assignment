"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import {
  BarChart3,
  GraduationCap,
  Home,
} from "lucide-react";
import QuestionAnalysis from "@/app/components/QuestionAnalysis ";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ComparisonGraph from "@/app/components/Graph";

export default function Hero() {
  const [rank, setRank] = useState<number>(4);
  const [percentile, setPercentile] = useState<number>(90);
  const [score, setScore] = useState<number>(1);

  const handleSubmit = () => {
    console.log({
      rank,
      percentile,
      score,
    });
  };


  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleCancel = () => {

    setRank(4);
    setPercentile(30);
    setScore(10);
  };

  return (
    <div>
      <div className="w-full border-b ">
        <div className="mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={60}
                height={60}
                alt="WhatBytes logo"
                className="object-contain"
              />
              <h2 className="text-4xl font-bold">WhatBytes</h2>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2 px-3 py-2 border-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="relative h-8 w-8">
                  <Image
                    src="/logo.png"
                    alt="Rahil Siddique profile picture"
                    className="rounded-full  object-cover"
                    sizes="32px"
                    fill
                  />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Rahil Siddique
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-56 border-r-2 h- screen pt-12">
          <nav className="space-y-2 ">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
              <BarChart3 className="w-4 h-4" />
              <span>Skill Test</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600">
              <GraduationCap className="w-4 h-4" />
              <span>Internship</span>
            </div>
          </nav>
        </div>
        <div className="pt-16 pl-9">
          <div>
            <h1 className="text-lg font-normal mb-4 ">Skill Test</h1>
            <div className="flex items-center gap-4 border-2 p-8 rounded-xl">
              <div className="w-12 h-12">
                <svg
                  viewBox="0 0 24 24"
                  className="text-orange-500 w-full h-full"
                >
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">
                  Hyper Text Markup Language
                </div>
                <div className="text-sm text-gray-900">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </div>
              </div>
              <div>
              <Dialog>
  <DialogTrigger>
    <div className="text-white font-medium bg-blue-900 px-5 py-2 rounded-xl mx-1" role="button" tabIndex={0}>
      Update
    </div>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <div className="flex justify-between items-center">
        <DialogTitle className="text-2xl font-bold">
          Update scores
        </DialogTitle>
      </div>
    </DialogHeader>
    <div className="space-y-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14216A] text-white">
          1
        </div>
        <label className="flex-1 text-base font-medium">
          Update your Rank
        </label>
        <Input
          type="number"
          value={rank}
          onChange={(e) => setRank(Number(e.target.value))}
          className="w-full max-w-[200px] rounded-lg border-[#E5E7EB]"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14216A] text-white">
          2
        </div>
        <label className="flex-1 text-base font-medium">
          Update your Percentile
        </label>
        <Input
          type="number"
          value={percentile}
          onChange={(e) => setPercentile(Number(e.target.value))}
          className="w-full max-w-[200px] rounded-lg border-[#E5E7EB]"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14216A] text-white">
          3
        </div>
        <label className="flex-1 text-base font-medium">
          Update your Current Score (out of 15)
        </label>
        <Input
          type="number"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="w-full max-w-[200px] rounded-lg border-[#E5E7EB]"
        />
      </div>
    </div>
    <div className="flex justify-end gap-3 mt-6">
      <DialogClose>
        <Button
          variant="outline"
          className="rounded-lg border-[#E5E7EB] px-6"
          onClick={handleCancel}
        >
          cancel
        </Button>
      </DialogClose>
      <DialogClose>
        <Button
          variant="default"
          className="rounded-lg bg-blue-900 text-white px-6"
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogClose>
    </div>
  </DialogContent>
</Dialog>
              </div>
            </div>
            <div className="mt-7">
              <Quick rank={rank} percentile={percentile} score={score} />
            </div>
          </div>
          <div className=" mt-7">
            <ComparisonGraph />
          </div>
        </div>
        <div className="mt-[107px] ml-5">
          <AnalysisCard />
          <div className="border-2 rounded-xl mt-8">
            <QuestionAnalysis score={score} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Quick({
  rank,
  percentile,
  score,
}: {
  rank: number;
  percentile: number;
  score: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Quick Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center border-r-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 mr-2">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold ">{rank}</div>
              <div className="text-xs text-muted-foreground">YOUR RANK</div>
            </div>
          </div>
          <div className="flex items-center justify-center border-r-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 mr-2">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{percentile}%</div>
              <div className="text-xs text-muted-foreground">PERCENTILE</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 mr-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{score}/15</div>
              <div className="text-xs text-muted-foreground">
                CORRECT ANSWERS
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const AnalysisCard = () => {
  return (
    <Card className="col-span-4 p-6 w-[30rem] bg-white border-2 text-black rounded-2xl h-96">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold">Syllabus Wise Analysis</h2>
      </div>
      <div className="space-y-6 flex flex-col gap-2">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>HTML Tools, Forms, History</span>
            <span className="text-blue-600">80%</span>
          </div>
          <div className="bg-blue-100 rounded-full w-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: "80%" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tags & References in HTML</span>
            <span className="text-orange-400">60%</span>
          </div>
          <div className="bg-orange-100 rounded-full w-full h-2">
            <div
              className="bg-orange-400 h-2 rounded-full transition-all duration-300"
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tables & References in HTML</span>
            <span className="text-red-600">24%</span>
          </div>
          <div className="bg-red-100 rounded-full w-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: "24%" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tables & CSS Basics</span>
            <span className="text-green-600">96%</span>
          </div>
          <div className="bg-green-100 rounded-full w-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: "96%" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
