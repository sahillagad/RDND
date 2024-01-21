import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { IUser } from "../../User/Model/UserDataType";
import checkBoxImage from "../../../Assets/Checkmark.jpg"
const PdfEditor: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    NAME: "Sahil Lagad",
    MOBILE: "9702556370",
    EMAIL: "sahillagad@gmail.com",
    AGE: "21",
    GENDER: "Male",
    CATEGORY: "GEN",
    STATE: "Maharashtra",
    STATE_CODE: "MH",
    PARLIAMENT: "Pune",
    PARLIAMENT_CODE: "34",
    ASSEMBLY: "Kothrud",
    ASSEMBLY_CODE: "210",
    HIGHEST_EDUCATIONAL_QUALIFICATION: "10th Education",
    ROZGAAR_NYAY_CODE: "973857",
    VOTER_ID: "972982",
    VOLUNTEER: false,
  });


  const [textSize, setTextSize] = useState<number>(14); // Initial text size
  const [existingPdfBytes, setExistingPdfBytes] = useState<Uint8Array | null>(
    null
  );

  const handleUserDetailsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleTextSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(Number(e.target.value));
  };

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        setExistingPdfBytes(uint8Array);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleEditPdf = async () => {
    try {
      // if (!existingPdfBytes) {
      //   console.error("No existing PDF file loaded.");
      //   return;
      // }


      const formUrl = 'https://rozgaardo.s3.ap-south-1.amazonaws.com/nyaypatra/IN/Patra_en/Patra_en_ROZGAR_NYAY_PATRA.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    
      const pdfDoc = await PDFDocument.load(formPdfBytes);

      
      const jpgImageBytes = await fetch(checkBoxImage).then((res) => res.arrayBuffer())
      const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
      const jpgDims = jpgImage.scale(0.5)


      // Iterate through all pages
      for (let i = 0; i < pdfDoc.getPages().length; i++) {
        if (i === 1) {
          const currentPage = pdfDoc.getPage(i);

          // Add text to each page with specified text size
          currentPage.drawText(`${user?.NAME}`, {
            x: 127,
            y: 358,
            size: textSize,
          });
          currentPage.drawText(`${user?.AGE}`, {
            x: 127,
            y: 315,
            size: textSize,
          });
          currentPage.drawText(`${user?.GENDER}`, {
            x: 465,
            y: 315,
            size: textSize,
          });
          currentPage.drawText(`${user?.CATEGORY}`, {
            x: 804,
            y: 315,
            size: textSize,
          });
          currentPage.drawText(`${user?.MOBILE}`, {
            x: 127,
            y: 270,
            size: textSize,
          });
          currentPage.drawText(`${user?.EMAIL}`, {
            x: 634,
            y: 270,
            size: textSize,
          });
          currentPage.drawText(`${user?.VOTER_ID}`, {
            x: 127,
            y: 226,
            size: textSize,
          });
          currentPage.drawText(`${user?.STATE}`, {
            x: 634,
            y: 226,
            size: textSize,
          });
          currentPage.drawText(`${user?.PARLIAMENT}`, {
            x: 127,
            y: 184,
            size: textSize,
          });
          currentPage.drawText(`${user?.ASSEMBLY}`, {
            x: 127,
            y: 135,
            size: textSize,
          });
          currentPage.drawText(`${user?.HIGHEST_EDUCATIONAL_QUALIFICATION}`, {
            x: 210,
            y: 87,
            size: textSize,
          });
        } else if (i === 2) {
          const currentPage = pdfDoc.getPage(i);
          // currentPage.drawText("✔", { x: 127, y: 358, size: textSize });
      
          currentPage.drawImage(jpgImage, {
    x: 44,
    y: 429.5,
    width: 10,
    height: 10,
  })
       
  currentPage.drawImage(jpgImage, {
    x: 382,
    y: 429.5,
    width: 10,
    height: 10,
  })
  currentPage.drawImage(jpgImage, {
    x: 721,
    y: 429.5,
    width: 10,
    height: 10,
  })
    
  
  currentPage.drawImage(jpgImage, {
    x: 44,
    y: 408.5,
    width: 10,
    height: 10,
  })
  
  currentPage.drawImage(jpgImage, {
    x: 382,
    y: 408.5,
    width: 10,
    height: 10,
  })
  currentPage.drawImage(jpgImage, {
    x: 721,
    y: 408.5,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 44,
    y: 388,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 382,
    y: 388,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 721,
    y: 388,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 44,
    y: 368,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 382,
    y: 368,
    width: 10,
    height: 10,
  })

  currentPage.drawImage(jpgImage, {
    x: 44,
    y: 309,
    width: 10,
    height: 10,
  })

  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[0]}`, {
    x: 53,
    y: 243,
    size: 17,
  });

  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[1]}`, {
    x: 83,
    y: 243,
    size: 17,
  });

  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[2]}`, {
    x: 113,
    y: 243,
    size: 17,
  });

  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[3]}`, {
    x: 144,
    y: 243,
    size: 17,
  });
  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[4]}`, {
    x: 174,
    y: 243,
    size: 17,
  });

  currentPage.drawText(`${user?.ROZGAAR_NYAY_CODE[5]}`, {
    x: 204,
    y: 243,
    size: 17,
  });
        }
      }

      // Save the modified PDF as bytes
      const modifiedPdfBytes = await pdfDoc.save();

      // Create a Blob and download the PDF
      const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "edited-pdf.pdf";
      link.click();
    } catch (error) {
      console.error("Error editing PDF:", error);
      
    }
  };

  return (
    <div>
      <br />
      <label>
        Text Size:
        <input type="number" value={textSize} onChange={handleTextSizeChange} />
      </label>
      <br />
      <label>
        Choose existing PDF file:
        <input type="file" onChange={handlePdfFileChange} />
      </label>
      <br />
      <button onClick={handleEditPdf}>Edit PDF</button>
    </div>
  );
};

export default PdfEditor;
