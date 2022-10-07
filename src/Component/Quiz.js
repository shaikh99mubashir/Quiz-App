import { Chip, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Html Stands For _______________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]);
  const [indxNo, setIndxNo] = useState(0);
  const [score, setScore] = useState(0);
  let date = new Date();
  date.setMilliseconds(date.getMilliseconds() + 30000);
  const [myDate, setMyDate] = useState(date);
  const [result, setResult] = useState(false);
  const [counter, setCounter] = useState(new Date());
  console.log(date);

  let checkQuestion = (answer) => {
    if (answer == questions[indxNo].correctAns) {
      setScore(score + 1);
    }
    // setNewDate();
    if (indxNo >= 5) {
      setResult(true)
    } else {
      setIndxNo(indxNo + 1);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setCounter(new Date());
    }, 1000);
  }, []);

  const setNewDate = () => {
    let date = new Date();
    date.setMilliseconds(date.getMilliseconds() + 30000);
    setMyDate(date);
  };

  useEffect(() => {
    if (Math.floor((myDate.getTime() - counter.getTime()) / 1000) <= 1) {
      // setNewDate();
      setResult(true);
      // setIndxNo(indxNo + 1)
    }
  }, [counter]);

  return (
    <Container>
      <Box>
        <Box className="start mb-5">
          <img
            src={logo}
            alt=""
            width={150}
            height={150}
            style={{ marginBottom: 30 }}
          />
        </Box>
        <Box className="mt-5">
          {result ? (
            <button className="startbtn">Your Score {score}</button>
          ) : (
            <button className="startbtn">
              {Math.floor((myDate.getTime() - counter.getTime()) / 1000)}
            </button>
          )}
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h5" color="white">
            Question# ({indxNo + 1} / {questions.length})
          </Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" color="white">
            Question#{indxNo + 1}: {questions[indxNo].question}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="white"
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {questions[indxNo].options.map((e, i) => (
              <div>
                <button
                  className="optBtn"
                  key={i}
                  onClick={() => checkQuestion(e)}
                >
                  {e}
                </button>
              </div>
            ))}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Quiz;
