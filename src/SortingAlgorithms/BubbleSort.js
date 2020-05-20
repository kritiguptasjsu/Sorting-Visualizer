export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1){
      return array;
    }
    bubbleSortHelper(array, 0, array.length, animations);
    return animations;
  }

  function bubbleSortHelper(array, startIdx, endIdx, animations){
    if(startIdx === endIdx){
      return;
    }
    let isSorted = false;
    let counter = 0;
    while(!isSorted){
      isSorted = true;
      for(let i = startIdx; i < endIdx - counter; i++){
        if(array[i] > array[i + 1]){
          swap(i, i+ 1, array);
          isSorted = false;
        }
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([i, array[i]]);
      }
      counter++;
    }
  }

  function swap(i, j, array){
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }