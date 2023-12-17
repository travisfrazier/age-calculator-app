<template>
		<FormKit class="form" type="form" name="main-form">
			<div class="form-wrapper-element">
				<FormKit
					type="number"
					label="Day"
					name="day"
					step="1"
					placeholder="DD"
					validation="required|between:1,31"
					validation-visibility="blur"
					v-model="day"
				/>
				<FormKit
					type="number"
					label="Month"
					name="month"
					step="2"
					placeholder="MM"
					validation="required|between:1,12"
					validation-visibility="blur"
					v-model="month"
				/>
				<FormKit
					type="number"
					label="Year"
					name="year"
					step="3"
					placeholder="YYYY"
					validation="required|between:1900,2023"
					validation-visibility="blur"
					v-model="year"
				/>
			</div>
			<div class="form-action-container">
				<div class="line"></div>
				<FormKit
					class="button"
					type="submit"
					for="main-form"
					@click="calculateAge"
					:disabled="day === null || month === null || year === null"
				>
					<svg
						width="46"
						height="44"
						viewBox="0 0 46 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 22.0189C8.33333 21.6859 23 25.6158 23 44"
							stroke="white"
							stroke-width="2"
						/>
						<path d="M23 44V0" stroke="white" stroke-width="2" />
						<path
							d="M45 22.0189C37.6667 21.6859 23 25.6158 23 44"
							stroke="white"
							stroke-width="2"
						/>
					</svg>
				</FormKit>
			</div>
		</FormKit>
</template>

<script lang="js">
export default {
	name: 'Form',
	data() {
		return {
			disabled: true,
			day: null,
			month: null,
			year: null,
			age: {
                years: null,
                months: null,
                days: null
            }
		}
	},
	methods: {
		calculateAge(e) {
                                    
			e.preventDefault();
			const buildDate = `${parseInt(this.year)},${parseInt(this.month)},${parseInt(this.day)}`;
			const dob = new Date(buildDate);


			const dobYear = dob.getFullYear();
    		const dobMonth = dob.getMonth();
    		const dobDate = dob.getDate();

			//get the current date from the system
			const now = new Date();
    		//extract the year, month, and date from current date
    		const currentYear = now.getFullYear();
    		const currentMonth = now.getMonth();
   			const currentDate = now.getDate();

			//get years
			var yearAge = currentYear - dobYear;

			//get months
			if (currentMonth >= dobMonth) {
				var monthAge = currentMonth - dobMonth;
			}
      		//get months when current month is greater
			else {
				yearAge--;
				var monthAge = 12 + currentMonth - dobMonth;
			}

			//get days
			if (currentDate >= dobDate) {
				var dayAge = currentDate - dobDate;
			}
			//get days when the current date is greater
			else {
			monthAge--;
			var dayAge = 31 + currentDate - dobDate;

			if (monthAge < 0) {
				monthAge = 11;
				yearAge--;
			  }
			}
			//group the age in a single variable
			this.age = {
				years: yearAge,
				months: monthAge,
				days: dayAge
			};


			this.$emit('passData', this.age);
			this.disabled = false;
		}
	}
}
</script>

<style lang="scss">
.form-container {
	.form-wrapper-element {
		display: flex;
		gap: 32px;
		@media only screen and (max-width: 800px) {
			gap: 22px;
			margin-bottom: 10px;
		}
	}
}

input {
	padding: 20px;
	font-size: 28px;
	width: 160px;
	border-radius: 10px;
	border: 1px solid #ccc;
	font-weight: bold;
	@media only screen and (max-width: 800px) {
		font-size: 20px;
		width: 80px;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type='number'] {
	-moz-appearance: textfield;
}
.formkit-actions {
	display: none;
}
button {
	border-radius: 50%;
	height: 70px;
	width: 70px;
	border: none;
	background: #854dff;
	cursor: pointer;
	margin-left: auto;
}
.line {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #ccc;
	margin: 1em 0;
	padding: 0;
	width: 100%;
}
.form-action-container {
	display: flex;
	width: 100%;
	align-items: center;
}
label {
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 14px;
}
input:focus-visible,
input:focus {
	outline: none;
	border-color: #854dff;
}
.formkit-messages {
	list-style-type: none;
	padding: 0;
	max-width: 160px;
	color: red;
}
</style>
