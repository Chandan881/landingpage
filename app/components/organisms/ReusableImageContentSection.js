"use client";

import Image from "next/image";
import Container from "@/app/components/atoms/Container";

export default function ReusableImageContentSection({
  sections = [],
  className = "",
}) {
  return (
    <section className={className}>
      {sections.map((section, index) => (
        <div key={index} className="py-16">
          <Container>
            <div
              className={`grid lg:grid-cols-2 gap-48 lg:gap-64 items-center max-w-6xl mx-auto ${
                section.imagePosition === "right"
                  ? "lg:grid-flow-col-dense"
                  : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`order-1 ${
                  section.imagePosition === "right"
                    ? "lg:order-2"
                    : "lg:order-1"
                }`}
              >
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.imageAlt || "Section image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`order-2 ${
                  section.imagePosition === "right"
                    ? "lg:order-1"
                    : "lg:order-2"
                }`}
              >
                <div className="max-w-lg mx-auto">
                  {section.badge && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4">
                      {section.badge}
                    </div>
                  )}

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h2>

                  {section.subtitle && (
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {section.subtitle}
                    </p>
                  )}

                  {section.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                  )}

                  {section.features && (
                    <ul className="space-y-6 mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-4"
                        >
                          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xl font-bold text-white">
                              {featureIndex + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {feature}
                            </h4>
                            {section.featureDescriptions &&
                              section.featureDescriptions[featureIndex] && (
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {section.featureDescriptions[featureIndex]}
                                </p>
                              )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.cta && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      {section.cta.primary && (
                        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                          {section.cta.primary}
                        </button>
                      )}
                      {section.cta.secondary && (
                        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
                          {section.cta.secondary}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
