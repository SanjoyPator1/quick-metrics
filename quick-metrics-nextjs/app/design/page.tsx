"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";
import { IMAGE_LINKS } from "@/lib/constants/image";
import Image from "next/image";
import { Palette, Type, Layers, Sliders } from "lucide-react";

const DesignPage = () => {
  const router = useRouter();

  const designSections = [
    {
      title: "Typography",
      description: "Text styles, headings, and content formatting",
      icon: <Type className="h-12 w-12 text-primary" />,
      path: "/design/typography",
    },
    {
      title: "Colors",
      description: "Color palette, themes, and accessibility guidelines",
      icon: <Palette className="h-12 w-12 text-primary" />,
      path: "/design/colors",
    },
    {
      title: "Components",
      description: "UI building blocks and interactive elements",
      icon: <Layers className="h-12 w-12 text-primary" />,
      path: "/design/components",
    },
    {
      title: "Design Tokens",
      description: "Visual design variables and spacing system",
      icon: <Sliders className="h-12 w-12 text-primary" />,
      path: "/design/tokens",
    },
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={IMAGE_LINKS.brandLogoOnlyHead}
          alt="Quick Metrics Logo"
          width={60}
          height={60}
          className="rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold">Design System</h1>
          <p className="text-muted-foreground">
            Visual language and component library for Quick Metrics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {designSections.map((section, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
            onClick={() => router.push(section.path)}
          >
            <CardHeader className="pb-2">
              <div className="mb-2">{section.icon}</div>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="secondary" className="w-full">
                Explore {section.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About the Design System</h2>
        <p className="text-muted-foreground mb-4">
          This design system provides guidelines and reusable components to
          ensure consistency across the Quick Metrics platform. It&apos;s built
          on shadcn/ui components with Tailwind CSS for styling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => window.open("https://ui.shadcn.com/", "_blank")}
          >
            shadcn/ui Documentation
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://tailwindcss.com/docs", "_blank")
            }
          >
            Tailwind CSS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
