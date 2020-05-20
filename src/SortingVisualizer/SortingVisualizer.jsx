import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js'
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js'

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 200;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'blue';
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromIntervals(5, 650));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    }

    quickSort(){

    }

    heapSort(){

    }

    insertionSort(){

    }

    selectionSort(){

    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    

    render(){
        const {array} = this.state;

        return(
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar"
                    key={idx}
                    style={{height: `${value}px`,}}></div>
                ))}
                    <div>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>  
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>   
                    <button onClick={() => this.quickSort()}>Quick Sort</button>  {/** To Be Done */}
                    <button onClick={() => this.heapSort()}>Heap Sort</button>    {/** To Be Done */}
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>    
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>   {/** To Be Done */}
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>    {/** To Be Done */}
                    </div>
            </div>
        );
    }
}


function randomIntFromIntervals(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}