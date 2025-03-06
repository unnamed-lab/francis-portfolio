import { ImageResponse } from "next/og"
import { userDetails } from "@/config/user-details"

export const runtime = "edge"

export const alt = "Igbokwe Ifechukwu Francis - Web Developer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background with wave */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "70%",
          height: "100%",
          background: "#1a365d",
          clipPath: "polygon(100px 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Side - Logo/Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            width: "50%",
          }}
        >
          {/* Circle Logo */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "60px",
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {userDetails.name.charAt(0)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#1a365d",
                margin: 0,
              }}
            >
              {userDetails.name}
            </h1>
            <p
              style={{
                fontSize: "24px",
                color: "#64748b",
                margin: 0,
              }}
            >
              {userDetails.title}
            </p>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
            }}
          >
            <p style={{ margin: 0 }}>{userDetails.email}</p>
            <p style={{ margin: 0 }}>{userDetails.phone}</p>
            <p style={{ margin: 0 }}>{userDetails.location}</p>
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#e2e8f0",
            }}
          >
            Web Developer & UI/UX Designer
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}

