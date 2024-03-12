
"use client"

import React from 'react';

const Shimmer = () => (
  <>
    <style jsx>{`
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
        100% {
          background-position: 200% 0;
          transform: translateY(0);
        }
      }

      @keyframes shimmerDelay {
        0% {
          background-position: -200% 0;
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          background-position: 200% 0;
          opacity: 1;
        }
      }

      .shimmer-card {
        max-width: 20rem;
        margin: 2rem auto;
        background-color: #fff;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .shimmer-image {
        height: 8rem;
        background: linear-gradient(-90deg, #eee 30%, #ddd 50%, #eee 70%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite linear;
      }

      .shimmer-content {
        padding: 1.5rem;
      }

      .shimmer-line {
        height: 0.75rem;
        background: linear-gradient(-90deg, #eee 30%, #ddd 50%, #eee 70%);
        background-size: 200% 100%;
      }

      .shimmer-line-small {
        height: 0.75rem;
        width: 50%;
        background: linear-gradient(-90deg, #eee 30%, #ddd 50%, #eee 70%);
        background-size: 200% 100%;
      }

      .animate-shimmer {
        animation: shimmer 1.5s infinite linear;
      }

      .animate-shimmer-delay {
        animation: shimmerDelay 1.5s infinite linear;
      }
    `}</style>

    <div className="shimmer-card">
      <div className="shimmer-image animate-shimmer"></div>
      <div className="shimmer-content">
        <div className="shimmer-line animate-shimmer"></div>
        <div className="shimmer-line-small animate-shimmer-delay"></div>
        <div className="shimmer-line animate-shimmer"></div>
      </div>
    </div>
  </>
);

export default Shimmer;
