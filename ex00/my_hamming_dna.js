function my_hamming_dna(dnaStr1, dnaStr2) {
    if(dnaStr1.length !== dnaStr2.length)
        return -1;
    let count = 0;

    for(let i = 0;i < dnaStr1.length; i++)
        count += dnaStr1[i] !== dnaStr2[i] ? 1 : 0;

    return count;
}