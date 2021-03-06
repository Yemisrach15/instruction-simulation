let btn = document.querySelector('.btn-go');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let stepsWrapper = document.querySelector('.steps');

let instructions = ['1940', '5941', '2941'];
let registerValues = ['300', '    ', '1940'];

let steps, num1Hex, num2Hex, numbers;

// add event listener to show steps button
btn.addEventListener('click', showSteps);

function showSteps() {
    num1Hex = dec2hex(Number(num1.value));
    num2Hex = dec2hex(Number(num2.value));
    numbers = [num1Hex, num2Hex];

    // step 1
    step = `<section class="step-1">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    // step 2
    registerValues[0] = '301';
    registerValues[1] = numbers[0];
    step += `<section  class="step-2">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    // step 3
    registerValues[2] = instructions[1];
    step += `<section  class="step-3">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    // step 4
    registerValues[0] = '302';
    registerValues[1] = dec2hex(Number(num1.value) + Number(num2.value));
    step += `<section  class="step-4">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    // step 5
    registerValues[2] = instructions[2];
    step += `<section  class="step-5">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    // step 6
    registerValues[0] = '303';
    numbers[1] = registerValues[1];
    step += `<section  class="step-6">
                <div>
                    <h2>Memory</h2>
                    <div class="boxes">
                        <div>
                            <p>300</p>
                            <span>1940</span>
                        </div>
                        <div>
                            <p>301</p>
                            <span>5941</span>
                        </div>
                        <div>
                            <p>302</p>
                            <span>2941</span>
                        </div>

                        <div class="trail-dots">. . . .</div>

                        <div>
                            <p>940</p>
                            <span>${numbers[0]}</span>
                        </div>

                        <div>
                            <p>941</p>
                            <span>${numbers[1]}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>CPU Registers</h2>
                    <div class="boxes">
                        <div>
                            <span>${registerValues[0]}</span>
                            <p>PC</p>
                        </div>
                        <div>
                            <span class="maybe-empty">${registerValues[1]}</span>
                            <p>AC</p>
                        </div>
                        <div>
                            <span>${registerValues[2]}</span>
                            <p>IR</p>
                        </div>
                    </div>
                </div>
            </section>`;

    stepsWrapper.innerHTML = step;

    console.log(`num1: ${num1Hex} num2: ${num2Hex}`);
}

function dec2hex(i) {
    return (i + 0x10000).toString(16).substr(-4).toUpperCase();
}