"use client";

import Image from "next/image";
import mobileImageVw from "@/app/assests/mainLanding/mobileImageVw.png";
import Container from "@/app/components/atoms/Container";
import { useState, useEffect } from "react";

export default function LocalStoresSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const stats = [
    { number: "100+", label: "Local Shops" },
    { number: "1000+", label: "Customers Served" },
    { number: "3", label: "Cities" },
  ];

  const styles = {
    section: {
      padding: "4rem 0",
    },
    container: {
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    flexContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "3rem" : "4rem",
      alignItems: isMobile ? "center" : "center",
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      padding: "40px",
    },
    leftSection: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      width: "100%",
      textAlign: isMobile ? "center" : "left",
      flex: isMobile ? "none" : "1",
    },
    title: {
      fontSize: "clamp(1.875rem, 4vw, 3rem)",
      fontWeight: "700",
      color: "#111827",
      lineHeight: "1.2",
      margin: "0",
    },
    description: {
      fontSize: "1.125rem",
      color: "#4b5563",
      lineHeight: "1.6",
      margin: "1.5rem 0 0 0",
    },
    statsGrid: {
      display: "flex",
      justifyContent: "space-between",
      gap: "2rem",
    },
    statItem: {
      textAlign: "center",
      flex: "1",
    },
    statNumber: {
      fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
      fontWeight: "700",
      color: "#9333ea",
      margin: "0",
    },
    statLabel: {
      fontSize: "clamp(0.875rem, 2vw, 1rem)",
      color: "#6b7280",
      margin: "0.5rem 0 0 0",
    },
    rightSection: {
      position: "relative",
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-end",
      width: "100%",
      flex: isMobile ? "none" : "1",
    },
    imageContainer: {
      position: "relative",
      width: isMobile ? "280px" : "384px",
      height: isMobile ? "320px" : "650px",
      bottom: isMobile ? "0" : "-32px",
    },
    image: {
      objectFit: "contain",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          {/* Left Section - Text and Statistics */}
          <div style={styles.leftSection}>
            <div>
              <h2 style={styles.title}>Bringing Local Stores Closer to You</h2>
              <p style={styles.description}>
                We're building a smarter, faster way to shop, connecting
                neighborhoods with the essentials they need, right when they
                need them.
              </p>
            </div>

            {/* Statistics */}
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statItem}>
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Mobile App Preview */}
          <div style={styles.rightSection}>
            <div style={styles.imageContainer}>
              <Image
                src={mobileImageVw}
                alt="Mobile App Preview"
                fill
                sizes="(max-width: 1024px) 280px, 384px"
                style={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
