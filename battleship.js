import React, { useState, useEffect } from 'react';
import shuffle from '../images/shuffle.png';
import rkey from '../images/rkey.png';

const Battleship = () => {
  const [playerBoard, setPlayerBoard] = useState(createEmptyBoard());
  const [aiBoard, setAiBoard] = useState(createEmptyBoard());
  const [hoveredCell, setHoveredCell] = useState(null);
  const [clickedCell, setClickedCell] = useState(null);
  const [currentTurn, setCurrentTurn] = useState('player'); 
  const [pregame, setPregame] = useState(true); 
  const [selectedShipSize, setSelectedShipSize] = useState(null);
  const [selectedShipIsHorizontal, setSelectedShipIsHorizontal] = useState(true);
  const [selectedShipPosition, setSelectedShipPosition] = useState(null);
  const [shipsAvailable, setShipsAvailable] = useState({
    '4x1': 1,
    '3x1': 2,
    '2x1': 3,
    '1x1': 4,
  });
  const [selectedShip, setSelectedShip] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerShots, setPlayerShots] = useState([]);
  const [aiShots, setAIShots] = useState([]);
  const [AIHits, setAIhits] = useState(0);
  const [PlayerHits, setPlayerhits] = useState(0);
  const [gameOutcome, setGameOutcome] = useState(null);
  const [aiShotHistory, setAIShotHistory] = useState([]);

  const [ship1Sunk, setShip1Sunk] = useState(false);
  const [ship2Sunk, setShip2Sunk] = useState(false);
  const [ship3Sunk, setShip3Sunk] = useState(false);
  const [ship4Sunk, setShip4Sunk] = useState(false);
  const [ship5Sunk, setShip5Sunk] = useState(false);
  const [ship6Sunk, setShip6Sunk] = useState(false);
  const [ship7Sunk, setShip7Sunk] = useState(false);
  const [ship8Sunk, setShip8Sunk] = useState(false);
  const [ship9Sunk, setShip9Sunk] = useState(false);
  const [ship10Sunk, setShip10Sunk] = useState(false);
  
	const [ship1SunkAI, setShip1SunkAI] = useState(false);
	const [ship2SunkAI, setShip2SunkAI] = useState(false);
	const [ship3SunkAI, setShip3SunkAI] = useState(false);
	const [ship4SunkAI, setShip4SunkAI] = useState(false);
	const [ship5SunkAI, setShip5SunkAI] = useState(false);
	const [ship6SunkAI, setShip6SunkAI] = useState(false);
	const [ship7SunkAI, setShip7SunkAI] = useState(false);
	const [ship8SunkAI, setShip8SunkAI] = useState(false);
	const [ship9SunkAI, setShip9SunkAI] = useState(false);
	const [ship10SunkAI, setShip10SunkAI] = useState(false);

	const [player1x1_1, setPlayer1x1_1] = useState(0);
	const [player1x1_2, setPlayer1x1_2] = useState(0);
	const [player1x1_3, setPlayer1x1_3] = useState(0);
	const [player1x1_4, setPlayer1x1_4] = useState(0);
	const [player2x1_1, setPlayer2x1_1] = useState(0);
	const [player2x1_2, setPlayer2x1_2] = useState(0);
	const [player2x1_3, setPlayer2x1_3] = useState(0);
	const [player3x1_1, setPlayer3x1_1] = useState(0);
	const [player3x1_2, setPlayer3x1_2] = useState(0);
	const [player4x1_1, setPlayer4x1_1] = useState(0);

	const [ai1x1_1, setAI1x1_1] = useState(0);
	const [ai1x1_2, setAI1x1_2] = useState(0);
	const [ai1x1_3, setAI1x1_3] = useState(0);
	const [ai1x1_4, setAI1x1_4] = useState(0);
	const [ai2x1_1, setAI2x1_1] = useState(0);
	const [ai2x1_2, setAI2x1_2] = useState(0);
	const [ai2x1_3, setAI2x1_3] = useState(0);
	const [ai3x1_1, setAI3x1_1] = useState(0);
	const [ai3x1_2, setAI3x1_2] = useState(0);
	const [ai4x1_1, setAI4x1_1] = useState(0);

  const isReadyToStart = () => {
    return Object.values(shipsAvailable).every((count) => count === 0);
  };

  function createEmptyBoard() {
    return Array.from({ length: 10 }, () => Array(10).fill(null));
  }

  const handlePregameCellClick = (row, col) => {
  if (pregame && currentTurn === 'player' && selectedShipSize) {
    const shipSize = parseInt(selectedShipSize.split('x')[0]);
    const isHorizontal = selectedShipIsHorizontal;

    if (canPlaceShip(row, col, shipSize, isHorizontal)) {

      setPlayerBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        for (let i = 0; i < shipSize; i++) {
          if (isHorizontal) {
            newBoard[row][col + i] = selectedShipSize;
          } else {
            newBoard[row + i][col] = selectedShipSize;
          }
        }
        return newBoard;
      });

      setShipsAvailable((prevShips) => ({
        ...prevShips,
        [selectedShipSize]: prevShips[selectedShipSize] - 1,
      }));

      setSelectedShip(null);
      setSelectedShipSize(null);
      setSelectedShipIsHorizontal(true);
      setSelectedShipPosition(null);
    } else if (canPlaceShip(row, col, shipSize, !isHorizontal)) {

      setSelectedShipSize(`${shipSize}x1`);
      setSelectedShipIsHorizontal(!isHorizontal);
      setSelectedShipPosition({ row, col });
    } else {

      alert('Cannot place ship here!');
    }
  }
};
useEffect(() => {
  if (ai4x1_1 === 12) {
    console.log("ai4x1_1 reached 12");
	setShip1Sunk(true);

  }
  if (ai3x1_1 === 12) {
    console.log("ai3x1_1 reached 12");
	setShip2Sunk(true);

  }
  if (ai3x1_2 === 12) {
    console.log("ai3x1_2 reached 12");
	setShip3Sunk(true);

  }
  if (ai2x1_1 === 12) {
    console.log("ai2x1_1 reached 12");
	setShip4Sunk(true);

  }  if (ai2x1_2 === 12) {
    console.log("ai2x1_2 reached 12");setShip5Sunk(true);

  }  if (ai2x1_3 === 12) {
    console.log("ai2x1_3 reached 12");setShip6Sunk(true);

  }  if (ai1x1_1 === 12) {
    console.log("ai1x1_1 reached 12");setShip7Sunk(true);

  }  if (ai1x1_2 === 12) {
    console.log("ai1x1_2 reached 12");setShip8Sunk(true);

  }  if (ai1x1_3 === 12) {
    console.log("ai1x1_3 reached 12");setShip9Sunk(true);

  }  if (ai1x1_4 === 12) {
    console.log("ai1x1_4 reached 12");setShip10Sunk(true);

  }

}, [ai4x1_1, ai3x1_1, ai3x1_2, ai2x1_1, ai2x1_2, ai2x1_3, ai1x1_1, ai1x1_2, ai1x1_3, ai1x1_4]);
useEffect(() => {

    setHoveredCell([]);
  }, [forceUpdate]);
	const handleRotation = () => {
    if (pregame && currentTurn === 'player' && selectedShipSize) {
      setSelectedShipIsHorizontal((prev) => !prev);
      setSelectedShipSize((prevSize) => {
        const size = parseInt(prevSize.split('x')[0]);
        return `${size}x1`;
      });

      setForceUpdate((prev) => !prev);
    }
  };

  React.useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'r' || event.key === 'R') {
      handleRotation();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [pregame, currentTurn, selectedShipSize, forceUpdate]);

  const canPlaceShip = (row, col, size, isHorizontal) => {

  if (
    (isHorizontal && col + size > 10) ||
    (!isHorizontal && row + size > 10)
  ) {
    return false;
  }

  for (let i = 0; i < size; i++) {
    if (isHorizontal) {
      if (
        playerBoard[row] &&
        (playerBoard[row][col + i] !== null || hasNeighboringShip(row, col + i))
      ) {
        return false; 
      }
    } else {
      if (
        playerBoard[row + i] &&
        (playerBoard[row + i][col] !== null || hasNeighboringShip(row + i, col))
      ) {
        return false; 
      }
    }
  }

  return true;
};

const hasNeighboringShip = (row, col) => {
  const neighbors = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ];

  for (const [neighborRow, neighborCol] of neighbors) {
    if (
      neighborRow >= 0 &&
      neighborRow < 10 &&
      neighborCol >= 0 &&
      neighborCol < 10 &&
      playerBoard[neighborRow][neighborCol] !== null
    ) {
      return true;
    }
  }

  return false;
};

  const handleShipSelection = (size) => {
  if (shipsAvailable[size] > 0) {
    setSelectedShipSize(size);
    setSelectedShip(`${size}x1`);
    setSelectedShipIsHorizontal(true); 
  }
};

 const handlePregameCellHover = (row, col) => {
  if (pregame && currentTurn === 'player' && selectedShipSize) {
    const shipSize = parseInt(selectedShipSize.split('x')[0]);
    const isHorizontal = selectedShipIsHorizontal;
    const previewCells = [];

    for (let i = 0; i < shipSize; i++) {
      let newRow = isHorizontal ? row : row + i;
      let newCol = isHorizontal ? col + i : col;

      previewCells.push(`${newRow}-${newCol}`);
    }

    setHoveredCell(previewCells);
    setSelectedShipPosition({ row, col });
  }
};

	const handleStartGame = () => {
  if (!isReadyToStart()) {
    alert('Place all ships before starting the game!');
    return;
  }

  const aiBoardWithShips = generateRandomShips();
  setAiBoard(aiBoardWithShips);

  setPregame(false);
  setCurrentTurn('player'); 
};

	const generateRandomShips = () => {
		const newAiBoard = createEmptyBoard();

		placeRandomShip(newAiBoard, '4x1', 1);
		placeRandomShip(newAiBoard, '3x1', 2);
		placeRandomShip(newAiBoard, '3x1', 3);
		placeRandomShip(newAiBoard, '2x1', 4);
		placeRandomShip(newAiBoard, '2x1', 5);
		placeRandomShip(newAiBoard, '2x1', 6);
		placeRandomShip(newAiBoard, '1x1', 7);
		placeRandomShip(newAiBoard, '1x1', 8);
		placeRandomShip(newAiBoard, '1x1', 9);
		placeRandomShip(newAiBoard, '1x1', 10);

		return newAiBoard;
	};

const placeRandomShip = (board, shipSize, id) => {
  const isHorizontal = Math.random() < 0.5;
  let row, col;

  do {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
  } while (!canPlaceShipAIAvoidOverlap(row, col, parseInt(shipSize.split('x')[0]), isHorizontal, board));

  for (let i = 0; i < parseInt(shipSize.split('x')[0]); i++) {
    if (isHorizontal) {

    } else {

    }
  }

  for (let i = 0; i < parseInt(shipSize.split('x')[0]); i++) {
    if (isHorizontal) {
      board[row][col + i] = `${shipSize}_${id}`;
    } else {
      board[row + i][col] = `${shipSize}_${id}`;
    }
  }
};

	const canPlaceShipAIAvoidOverlap = (row, col, size, isHorizontal, board) => {
  if (
    (isHorizontal && col + size > 10) ||
    (!isHorizontal && row + size > 10)
  ) {
    return false;
  }

  for (let i = 0; i < size; i++) {
    if (isHorizontal) {
      if (board[row] && board[row][col + i] !== null) {
        return false; 
      }

      if (
        (row > 0 && board[row - 1][col + i] !== null) ||
        (row < 9 && board[row + 1][col + i] !== null) ||
        (col + i > 0 && board[row][col + i - 1] !== null) ||
        (col + i < 9 && board[row][col + i + 1] !== null) ||
        ((row > 0 && col + i > 0) && board[row - 1][col + i - 1] !== null) ||
        ((row > 0 && col + i < 9) && board[row - 1][col + i + 1] !== null) ||
        ((row < 9 && col + i > 0) && board[row + 1][col + i - 1] !== null) ||
        ((row < 9 && col + i < 9) && board[row + 1][col + i + 1] !== null)
      ) {
        return false; 
      }
    } else {
      if (board[row + i] && board[row + i][col] !== null) {
        return false; 
      }

      if (
        (col > 0 && board[row + i][col - 1] !== null) ||
        (col < 9 && board[row + i][col + 1] !== null) ||
        (row + i > 0 && board[row + i - 1][col] !== null) ||
        (row + i < 9 && board[row + i + 1][col] !== null) ||
        ((row + i > 0 && col > 0) && board[row + i - 1][col - 1] !== null) ||
        ((row + i > 0 && col < 9) && board[row + i - 1][col + 1] !== null) ||
        ((row + i < 9 && col > 0) && board[row + i + 1][col - 1] !== null) ||
        ((row + i < 9 && col < 9) && board[row + i + 1][col + 1] !== null)
      ) {
        return false; 
      }
    }
  }

  return true;
};

useEffect(() => {

    if (PlayerHits === 20) {
      setGameOutcome('win');
      setIsGameOver(true);
    } else if (AIHits === 20) {
      setGameOutcome('lose');
      setIsGameOver(true);
    }
  }, [PlayerHits, AIHits]);	

const resetGame = () => {
  window.location.reload();
};

const handleShootAroundPlayer = (row, col) => {
  if (!isGameOver) {

      if (!aiShots.includes(`${row}-${col}`)) {
		if (row >= 0 && row < 10 && col >= 0 && col < 10) {
        const shotResult = aiBoard[row][col] ? 'hit' : 'miss';
        setAIShots((prevShots) => [...prevShots, `${row}-${col}`]);

        if (shotResult === 'hit') {

          const shipSize = getShipSize(row, col, aiBoard);

		  setPlayerhits(PlayerHits + 1);

          const isSunk = checkIfShipIsSunk(row, col, aiBoard);
          if (isSunk) {
            markSunkShip(row, col, aiBoard);

            alert('You sank an enemy ship!');
          }
        }

        setCurrentTurn('ai');
      }}

  }
};

const handleShootAroundAI = (row, col) => {
  if (!isGameOver) {

      if (!playerShots.includes(`${row}-${col}`)) {
		if (row >= 0 && row < 10 && col >= 0 && col < 10) {
        const shotResult = playerBoard[row][col] ? 'hit' : 'miss';
        setPlayerShots((prevShots) => [...prevShots, `${row}-${col}`]);
		setAIShotHistory(prevHistory => [...prevHistory, { row: row, col: col }]);
        if (shotResult === 'hit') {

		  setAIhits(AIHits + 1);
          const isSunk = checkIfShipIsSunk(row, col, playerBoard);
          if (isSunk) {
            markSunkShip(row, col, playerBoard);

            alert('Enemy sank one of your ships!');
          }
        }}

        setCurrentTurn('player');
      }
    }

};

const handleAImove = () => {

  let aiRow, aiCol;
  do {
    aiRow = Math.floor(Math.random() * 10);
    aiCol = Math.floor(Math.random() * 10);
  } while (aiShotHistory.some(coord => coord.row === aiRow && coord.col === aiCol));

  setAIShotHistory(prevHistory => [...prevHistory, { row: aiRow, col: aiCol }]);

  handleShoot(aiRow, aiCol, 'ai');
};

const handleShoot = (row, col, turn) => {
  if (!isGameOver) {
    if (turn === 'player') {

	  setCurrentTurn('player');
      if (!aiShots.includes(`${row}-${col}`)) {
        const shotResult = aiBoard[row][col] ? 'hit' : 'miss';
        setAIShots((prevShots) => [...prevShots, `${row}-${col}`]);

        if (shotResult === 'hit') {

          const shipSize = getShipSize(row, col, aiBoard);

          setPlayerhits(PlayerHits + 1);
		  console.log(`ship${shipSize.id}Sunk`);

		  if(shipSize.id === 1){
			 setAI4x1_1(prevValue => prevValue + 3);
			 if(ai4x1_1 == 12){
				setShip1Sunk(true)
			 }
		  }
		  if(shipSize.id === 2){
			 setAI3x1_1(prevValue => prevValue + 4);
			 if(ai3x1_1 == 12){
				setShip2Sunk(true)
			 }
		  }
		  if(shipSize.id === 3){
			 setAI3x1_2(prevValue => prevValue + 4);
			 if(ai3x1_2 == 12){
				setShip3Sunk(true)
			 }
		  }
		  if(shipSize.id === 4){
			 setAI2x1_1(prevValue => prevValue + 6);
			 if(ai2x1_1 == 12){
				setShip4Sunk(true)
			 }
		  }
		  if(shipSize.id === 5){
			 setAI2x1_2(prevValue => prevValue + 6);
			 if(ai2x1_2 == 12){
				setShip5Sunk(true)
			 }
		  }
		  if(shipSize.id === 6){
			 setAI2x1_3(prevValue => prevValue + 6);
			 if(ai2x1_3 == 12){
				setShip6Sunk(true)
			 }
		  }
		  if(shipSize.id === 7){
			 setAI1x1_1(prevValue => prevValue + 12);
			 if(ai1x1_1 == 12){
				setShip7Sunk(true)
			 }
		  }
		  if(shipSize.id === 8){
			 setAI1x1_2(prevValue => prevValue + 12);
			 if(ai1x1_2 == 12){
				setShip8Sunk(true)
			 }
		  }
		  if(shipSize.id === 9){
			 setAI1x1_3(prevValue => prevValue + 12);
			 if(ai1x1_3 == 12){
				setShip9Sunk(true)
			 }
		  }
		  if(shipSize.id === 10
		  ){
			 setAI1x1_4(prevValue => prevValue + 12);
			 if(ai1x1_4 == 12){
				setShip10Sunk(true)
			 }
		  }
		  console.log(`ship${shipSize.id}Sunk:`, eval(`ship${shipSize.id}Sunk`));
		if (shipSize.size === 1 || shipSize.size === 2 && shipSize.id == 4 && ai2x1_1 ==6 || shipSize.size === 2 && shipSize.id == 5 && ai2x1_2 ==6 ||
		shipSize.size === 2 && shipSize.id == 6 && ai2x1_1 ==6 || shipSize.size === 3 && shipSize.id == 2 && ai3x1_1 ==8 || 
		shipSize.size === 3 && shipSize.id == 3 && ai3x1_2 ==8 || shipSize.size === 4 && shipSize.id == 1 && ai4x1_1 ==9 ) {
            console.log('sunk');
			handleShootAroundPlayer(row - 1, col - 1);
            handleShootAroundPlayer(row - 1, col + 1);
            handleShootAroundPlayer(row + 1, col - 1);
            handleShootAroundPlayer(row + 1, col + 1);
            handleShootAroundPlayer(row - 1, col);
            handleShootAroundPlayer(row, col + 1);
            handleShootAroundPlayer(row + 1, col);
            handleShootAroundPlayer(row, col - 1);

          } else {
            handleShootAroundPlayer(row - 1, col - 1);
            handleShootAroundPlayer(row - 1, col + 1);
            handleShootAroundPlayer(row + 1, col - 1);
            handleShootAroundPlayer(row + 1, col + 1);
          }

          const isSunk = checkIfShipIsSunk(row, col, aiBoard);
          if (isSunk) {
            markSunkShip(row, col, aiBoard);

          }
        }

        setCurrentTurn('ai');
        setTimeout(() => {
          handleAImove();
        }, 100); 
      }
    } else if (turn === 'ai') {

	  setCurrentTurn('ai');
      const playerRow = row;
      const playerCol = col;

      if (!playerShots.includes(`${playerRow}-${playerCol}`)) {
        const shotResult = playerBoard[playerRow][playerCol] ? 'hit' : 'miss';
        setPlayerShots((prevShots) => [...prevShots, `${playerRow}-${playerCol}`]);

        if (shotResult === 'hit') {

          const shipSize = getShipSize(playerRow, playerCol, playerBoard);
          setAIhits(AIHits + 1);
          if (shipSize.size === 1 || shipSize.size === 2 && shipSize.id == 4 && ai2x1_1 ==6 || shipSize.size === 2 && shipSize.id == 5 && ai2x1_2 ==6 ||
		shipSize.size === 2 && shipSize.id == 6 && ai2x1_1 ==6 || shipSize.size === 3 && shipSize.id == 2 && ai3x1_1 ==8 || 
		shipSize.size === 3 && shipSize.id == 3 && ai3x1_2 ==8 || shipSize.size === 4 && shipSize.id == 1 && ai4x1_1 ==9 ) {
            handleShootAroundAI(playerRow - 1, playerCol - 1);
            handleShootAroundAI(playerRow - 1, playerCol + 1);
            handleShootAroundAI(playerRow + 1, playerCol - 1);
            handleShootAroundAI(playerRow + 1, playerCol + 1);
            handleShootAroundAI(playerRow - 1, playerCol);
            handleShootAroundAI(playerRow, playerCol + 1);
            handleShootAroundAI(playerRow + 1, playerCol);
            handleShootAroundAI(playerRow, playerCol - 1);
          } else {
            handleShootAroundAI(playerRow - 1, playerCol - 1);
            handleShootAroundAI(playerRow - 1, playerCol + 1);
            handleShootAroundAI(playerRow + 1, playerCol - 1);
            handleShootAroundAI(playerRow + 1, playerCol + 1);
          }
          const isSunk = checkIfShipIsSunk(playerRow, playerCol, playerBoard);
          if (isSunk) {
            markSunkShip(playerRow, playerCol, playerBoard);

          }
        }

        setCurrentTurn('player');
      }
    }
  }
};

const checkIfShipIsSunk = (row, col, board) => {
  const shipSize = getShipSize(row, col, board);
  const isHorizontal = board[row][col].split('_')[1] === 'h'; 

  for (let i = 0; i < shipSize; i++) {
    const cellValue = isHorizontal ? board[row][col + i] : board[row + i][col];
    if (cellValue !== 'hit') {
      return false; 
    }
  }
  return true; 
};

const markSunkShip = (row, col, board) => {
  const shipSize = getShipSize(row, col, board);
  const isHorizontal = board[row][col].split('_')[1] === 'h';

  for (let i = 0; i < shipSize; i++) {
    if (isHorizontal) {
      board[row][col + i] = 'sunk';
    } else {
      board[row + i][col] = 'sunk';
    }
  }
};

const getShipSize = (row, col, board) => {
  const shipNotation = board[row][col];
  const [size, id] = shipNotation.split('_');
  return { size: parseInt(size), id: parseInt(id) };
};

	const handleRandomPlacement = () => {
  const newPlayerBoard = createEmptyBoard();
  const newShipsAvailable = {
    '4x1': 1,
    '3x1': 2,
    '2x1': 3,
    '1x1': 4,
  };

  for (const shipSize in newShipsAvailable) {
    for (let count = newShipsAvailable[shipSize]; count > 0; count--) {
      let isHorizontal, row, col;

      do {
        isHorizontal = Math.random() < 0.5;
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
      } while (!canPlaceShipWithSpacing(row, col, parseInt(shipSize.split('x')[0]), isHorizontal, newPlayerBoard));

      for (let i = 0; i < parseInt(shipSize.split('x')[0]); i++) {
        if (isHorizontal) {
          newPlayerBoard[row][col + i] = shipSize;
        } else {
          newPlayerBoard[row + i][col] = shipSize;
        }
      }

      newShipsAvailable[shipSize]--;
    }
  }

  setPlayerBoard(newPlayerBoard);
  setShipsAvailable(newShipsAvailable);
};

const canPlaceShipWithSpacing = (row, col, size, isHorizontal, board) => {
  if (
    (isHorizontal && col + size > 10) ||
    (!isHorizontal && row + size > 10)
  ) {
    return false;
  }

  for (let i = 0; i < size; i++) {
    if (isHorizontal) {
      if (board[row] && board[row][col + i] !== null) {
        return false; 
      }

      if (
        (row > 0 && board[row - 1][col + i] !== null) ||
        (row < 9 && board[row + 1][col + i] !== null) ||
        (col + i > 0 && board[row][col + i - 1] !== null) ||
        (col + i < 9 && board[row][col + i + 1] !== null) ||
        ((row > 0 && col + i > 0) && board[row - 1][col + i - 1] !== null) ||
        ((row > 0 && col + i < 9) && board[row - 1][col + i + 1] !== null) ||
        ((row < 9 && col + i > 0) && board[row + 1][col + i - 1] !== null) ||
        ((row < 9 && col + i < 9) && board[row + 1][col + i + 1] !== null)
      ) {
        return false; 
      }
    } else {
      if (board[row + i] && board[row + i][col] !== null) {
        return false; 
      }

      if (
        (col > 0 && board[row + i][col - 1] !== null) ||
        (col < 9 && board[row + i][col + 1] !== null) ||
        (row + i > 0 && board[row + i - 1][col] !== null) ||
        (row + i < 9 && board[row + i + 1][col] !== null) ||
        ((row + i > 0 && col > 0) && board[row + i - 1][col - 1] !== null) ||
        ((row + i > 0 && col < 9) && board[row + i - 1][col + 1] !== null) ||
        ((row + i < 9 && col > 0) && board[row + i + 1][col - 1] !== null) ||
        ((row + i < 9 && col < 9) && board[row + i + 1][col + 1] !== null)
      ) {
        return false; 
      }
    }
  }

  return true;
};

	const renderShipStatus = (shipSize, count, sunk) => {
		const shipCells = Array.from({ length: shipSize }, (_, index) => (
		  <span key={index} style={{ color: sunk ? 'grey' : count > 0 ? 'black' : 'white' }}>
			{count > 0 ? '⬛' : '⬜'}
		  </span>
		));

    return (
      <div>
        {shipCells}
        <span style={{ marginLeft: '5px', color: sunk ? 'grey' : count > 0 ? 'black' : 'white' }}>
          {count}
        </span>
      </div>
    );
  };

  const renderShipsStatus = () => {
    return Object.entries(shipsAvailable).map(([shipSize, count]) => {
      const shipNumber = parseInt(shipSize.split('x')[0]);
      const sunk = eval(`ship${shipNumber}Sunk`); 
      return (
        <div key={shipSize}>
          {renderShipStatus(shipNumber, count, sunk)}
        </div>
      );
    });
  };

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div
        style={{
          width: '45%',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          position: 'relative',
          backgroundColor: currentTurn === 'player' ? '#fff' : '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Your Board</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {playerBoard.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    style={{
                      width: '30px',
                      height: '30px',
                      border: '1px solid #ddd',
                      textAlign: 'center',
                      background:
                        cell === '1x1' || cell === '2x1' || cell === '3x1' || cell === '4x1'
                          ? 'lightblue' 
                          : playerShots.includes(`${rowIndex}-${colIndex}`)
                          ? cell === '1x1' || cell === '2x1' || cell === '3x1' || cell === '4x1'
                            ? 'linear-gradient(to top left, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px)), linear-gradient(to top right, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px))' 
                            : 'radial-gradient(circle, grey 20%, transparent 20%)' 
                          : hoveredCell &&
                            (hoveredCell.includes(`${rowIndex}-${colIndex}`) || hoveredCell.includes(`${row}-${colIndex}`))
                          ? 'lightcyan' 
                          : cell === 'hit'
                          ? 'linear-gradient(to top left, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px)), linear-gradient(to top right, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px))' 
                          : 'transparent',
                    }}
                    onClick={() => handlePregameCellClick(rowIndex, colIndex)}
                    onMouseEnter={() => handlePregameCellHover(rowIndex, colIndex)}
                    onMouseLeave={() => setHoveredCell(null)}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {pregame && (
          <div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                <img onClick={handleRandomPlacement} src={shuffle} style={{ width: 23, height: 23, postion: 'relative' }} />
                <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                  <img src={rkey} style={{ width: 23, height: 23, postion: 'relative' }} />
                  <span style={{ marginLeft: '10px' }}>&nbsp;Rotate</span>
                </div>
              </div>

              <ul style={{ textAlign: 'left', marginLeft: 20, marginTop: 20 }}>
                <li onClick={() => handleShipSelection('4x1')}>⬛⬛⬛⬛: {shipsAvailable['4x1']}</li>
                <li onClick={() => handleShipSelection('3x1')}>⬛⬛⬛: {shipsAvailable['3x1']}</li>
                <li onClick={() => handleShipSelection('2x1')}>⬛⬛: {shipsAvailable['2x1']}</li>
                <li onClick={() => handleShipSelection('1x1')}>⬛: {shipsAvailable['1x1']}</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          width: '45%',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          backgroundColor: currentTurn === 'ai' ? '#fff' : '#fff',
        }}
      >
        <div>
          <h2 style={{ textAlign: 'center' }}>Opponent's Board</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {aiBoard.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      style={{
                        width: '30px',
                        height: '30px',
                        border: `1px solid ${cell === 'sunk' ? 'red' : '#ddd'}`, 
                        textAlign: 'center',
                        background: aiShots.includes(`${rowIndex}-${colIndex}`)
                          ? cell
                            ? 'linear-gradient(to top left, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px)), linear-gradient(to top right, transparent calc(50% - 1px), red 50%, transparent calc(50% + 1px))' 
                            : 'radial-gradient(circle, grey 20%, transparent 20%)' 
                          : 'transparent',
                      }}
                      onClick={() => !pregame && handleShoot(rowIndex, colIndex, 'player')}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Ships Left</h3>

        <div style={{ marginLeft: '20px', display: 'flex' }}>
          <div>
            <div style={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
              {ship1Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜⬜⬜</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛⬛⬛</p>
              )}
            </div>
            <div style={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
              {ship2Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship3Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜⬜</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛⬛</p>
              )}
            </div>
            <div style={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
              <br />
              {ship4Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship5Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship6Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛⬛&nbsp;&nbsp;&nbsp;</p>
              )}
            </div>
            <div style={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
              {ship7Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship8Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship9Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛&nbsp;&nbsp;&nbsp;</p>
              )}
              {ship10Sunk ? (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬜&nbsp;&nbsp;&nbsp;</p>
              ) : (
                <p style={{ marginTop: 2, marginBottom: 2 }}>⬛&nbsp;&nbsp;&nbsp;</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    {pregame && (<div>
    <button style={{
    marginTop: '20px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    color: 'black',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s, color 0.3s',
	}} onClick={handleStartGame}>Start Game</button></div>)}

    {gameOutcome && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '2em',
        }}
      >
		{gameOutcome && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '48px',
    }}
  >
    <div>
      {gameOutcome === 'win' ? 'You won!' : 'You lost!'}
    </div>
    <div>
      <button
        style={{
          marginTop: '20px',
          backgroundColor: 'transparent',
          border: '1px solid white',
          color: 'black',
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background-color 0.3s, color 0.3s',
		  color: 'white',
        }}
        onClick={resetGame}
      >
        Play Again
      </button>
    </div>
  </div>
)}
      </div>
    )}
  </div>
);

};

export default Battleship;