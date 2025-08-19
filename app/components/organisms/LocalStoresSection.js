"use client";

import Image from "next/image";
import mobileImageVw from "@/app/assests/mainLanding/mobileImageVw.png";
import Container from "@/app/components/atoms/Container";
import { useState, useEffect } from "react";

export default function LocalStoresSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      padding: "53px 81px 0",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
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
      fontSize: "40px",
      fontWeight: "700",
      color: "#000000",
      lineHeight: "64px",
      letterSpacing: "-5%",
      margin: "0",
      position: "relative",
      bottom: isMobile ? "0px" : "60px",
    },
    description: {
      fontSize: "29px",
      fontWeight: "500",
      color: "#858298",
      lineHeight: "36px",
      letterSpacing: "-3%",
      margin: "1.5rem 0 0 0",
      position: "relative",
      bottom: isMobile ? "0px" : "65px",
    },
    statsGrid: {
      display: "flex",
      justifyContent: "space-between",
      gap: "2rem",
      position: "relative",
      right: isMobile ? "0px" : "40px",
      top: isMobile ? "0px" : "10px",
    },
    statItem: {
      textAlign: "center",
      flex: "1",
    },
    statNumber: {
      fontSize: "50px",
      fontWeight: "700",
      color: "#342CA1",
      margin: "0",
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      lineHeight: "64px",
      letterSpacing: "-2%",
    },
    statLabel: {
      fontSize: "20px",
      fontWeight: "500",
      color: "#858298",
      margin: "0.5rem 0 0 0",
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      lineHeight: "27px",
      letterSpacing: "-3%",
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
      width: isMobile ? "280px" : "444px",
      height: isMobile ? "320px" : "510px",
      bottom: isMobile ? "0" : "-12px",
      transition: "all 0.3s ease-in-out",
    },
    image: {
      objectFit: "contain",
    },
  };

  return (
    <section style={styles.section}>
      <Container className="py-16">
        <div
          style={{
            ...styles.flexContainer,
            backgroundColor: "#F3F2FA",
            borderRadius: "24px",
            boxShadow: isHovered ? "0 10px 25px rgba(0, 0, 0, 0.15)" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
            <div
              style={{
                ...styles.imageContainer,
                transform: isHovered ? "scale(1.12)" : "scale(1)",
              }}
            >
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
      </Container>
    </section>
  );
}
