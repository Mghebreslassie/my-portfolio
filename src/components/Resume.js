import React from "react"
import Pdf from "../assets/FunctionalResume.pdf"

const Download = () => {
  return (
    <div className="resume">
      <a href={Pdf} rel="noreferrer" target="_blank">
        Download Pdf
      </a>
    </div>
  )
}

export default Download
