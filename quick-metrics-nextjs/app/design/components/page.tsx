"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonShowcase from "@/components/design/button-showcase";
import CardsShowcase from "@/components/design/cards-showcase";
import FeedbackShowcase from "@/components/design/feedback-showcase";
import FormComponentUsageShowcase from "@/components/design/form-component-usage-showcase";
import FormInputShowcase from "@/components/design/form-inputs";
import LayoutShowcase from "@/components/design/layout-showcase";
import UIPatternsShowcase from "@/components/design/ui-patterns-showcase";
import { ArrowLeft, Check, CheckCircle, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SectionId =
  | "buttons"
  | "cards"
  | "inputs"
  | "patterns"
  | "feedback"
  | "layout";

interface Section {
  id: SectionId;
  title: string;
  description: string;
}

const ComponentsPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SectionId>("buttons");

  const sectionRefs = {
    buttons: useRef<HTMLElement>(null),
    cards: useRef<HTMLElement>(null),
    inputs: useRef<HTMLElement>(null),
    patterns: useRef<HTMLElement>(null),
    feedback: useRef<HTMLElement>(null),
    layout: useRef<HTMLElement>(null),
  };

  const sections: Section[] = [
    {
      id: "buttons",
      title: "Buttons",
      description: "Interactive elements for user actions",
    },
    {
      id: "cards",
      title: "Cards",
      description: "Container components for grouping related content",
    },
    {
      id: "inputs",
      title: "Form Inputs",
      description: "Input components for collecting user data",
    },
    {
      id: "patterns",
      title: "UI Patterns",
      description: "Common UI patterns built with components",
    },
    {
      id: "feedback",
      title: "Feedback",
      description: "Components for user feedback and notifications",
    },
    {
      id: "layout",
      title: "Layout",
      description: "Components for organizing page content",
    },
  ];

  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const ref = sectionRefs[sectionId];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = sectionRefs[section.id].current;
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const topOffset = rect.top + window.scrollY;

        if (
          scrollPosition >= topOffset &&
          scrollPosition < topOffset + element.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/design")}
            className="flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Components</h1>
            <p className="text-muted-foreground">
              Core UI building blocks for Quick Metrics
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-background py-3 border-b mb-6">
        <div className="overflow-x-auto container mx-auto">
          <div className="flex space-x-2 min-w-max">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="rounded-full px-4"
              >
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground">
          Quick Metrics uses shadcn/ui components with Tailwind CSS for a
          consistent and accessible user interface. Below are examples of all
          the core components used throughout the application.
        </p>
      </div>

      {/* Buttons Section */}
      <section ref={sectionRefs.buttons} id="buttons" className="scroll-mt-20">
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[0].title}</h2>
          <p className="text-muted-foreground">{sections[0].description}</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ButtonShowcase />
          </CardContent>
        </Card>
      </section>

      {/* Cards Section */}
      <section ref={sectionRefs.cards} id="cards" className="scroll-mt-20">
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[1].title}</h2>
          <p className="text-muted-foreground">{sections[1].description}</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <CardsShowcase />
          </CardContent>
        </Card>
      </section>

      {/* Form Inputs Section */}
      <section ref={sectionRefs.inputs} id="inputs" className="scroll-mt-20">
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[2].title}</h2>
          <p className="text-muted-foreground">{sections[2].description}</p>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Elements</CardTitle>
              <CardDescription>Form controls for user input</CardDescription>
            </CardHeader>
            <CardContent>
              <FormInputShowcase />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Component Usage</CardTitle>
              <CardDescription>Code examples for form inputs</CardDescription>
            </CardHeader>
            <CardContent>
              <FormComponentUsageShowcase />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UI Patterns Section */}
      <section
        ref={sectionRefs.patterns}
        id="patterns"
        className="scroll-mt-20"
      >
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[3].title}</h2>
          <p className="text-muted-foreground">{sections[3].description}</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <UIPatternsShowcase />
          </CardContent>
        </Card>
      </section>

      {/* Feedback Section */}
      <section
        ref={sectionRefs.feedback}
        id="feedback"
        className="scroll-mt-20"
      >
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[4].title}</h2>
          <p className="text-muted-foreground">{sections[4].description}</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <FeedbackShowcase />
          </CardContent>
        </Card>
      </section>

      {/* Layout Section */}
      <section ref={sectionRefs.layout} id="layout" className="scroll-mt-20">
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold">{sections[5].title}</h2>
          <p className="text-muted-foreground">{sections[5].description}</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <LayoutShowcase />
          </CardContent>
        </Card>
      </section>

      {/* Component Resources */}
      <div className="bg-muted/30 rounded-xl p-6 mt-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-full">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Component Resources</h2>
            <p className="text-muted-foreground">
              Documentation and guidelines
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">
              Component Documentation
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Quick Metrics uses shadcn/ui components, which are built on top of
              Radix UI primitives. These provide accessible, unstyled components
              that can be customized with Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  window.open("https://ui.shadcn.com/docs", "_blank")
                }
              >
                shadcn/ui Documentation
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://www.radix-ui.com/primitives", "_blank")
                }
              >
                Radix UI Primitives
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">
              Accessibility Guidelines
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              All components follow WCAG 2.1 AA accessibility standards. They
              support keyboard navigation, screen readers, and maintain
              sufficient color contrast.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Use semantic HTML elements
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Include proper ARIA attributes when needed
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Ensure keyboard navigability
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Maintain sufficient color contrast
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Support screen readers with appropriate text alternatives
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-opacity"
        style={{
          opacity: activeSection !== "buttons" ? 1 : 0,
          visibility: activeSection !== "buttons" ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ComponentsPage;
