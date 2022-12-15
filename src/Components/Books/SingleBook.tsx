import React from "react";
import styled from "styled-components";
import pic from "../Assets/book1.webp";

const SingleBook = () => {
	return (
		<Container>
			<Wrapper>
				<First>
					<Hold>
						<AuthorImage>G</AuthorImage>
						<AuthName>Gideon ekeke </AuthName>
					</Hold>
				</First>
				<MainImage src={pic} />
				<h2>HELLO WORLD</h2>
				<Desc>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eius
					doloremque nisi consequuntur expedita quasi. Debitis animi totam eum
					amet maiores autem blanditiis quaerat cumque dolor magnam? Dolorem
					officia laborum minima fugit error, eaque tempora ducimus!
					Reprehenderit, odio aspernatur vitae mollitia error, maiores facere
					illum nesciunt minus ipsam, quia deserunt incidunt ipsa aliquid
					recusandae animi pariatur delectus esse quod autem iusto! Aperiam
					sapiente est architecto amet, nobis totam unde impedit ducimus commodi
					earum numquam possimus. Consequatur molestias ducimus exercitationem
					praesentium veritatis soluta facilis iste esse distinctio accusamus,
					ab corporis vitae architecto eos ipsa facere ipsam rerum aliquid? Vel,
					animi beatae?
				</Desc>
			</Wrapper>
		</Container>
	);
};

export default SingleBook;

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;

	h2 {
		width: 100%;
	}
`;
const Desc = styled.div`
	font-size: 18px;
`;

const AuthorImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #bb3d6e;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	margin-right: 10px;
`;
const AuthName = styled.div`
	font-weight: bold;
	font-size: 25px;
`;

const Hold = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
`;
const MainImage = styled.img`
	height: 500px;
	width: 100%;
	border-radius: 5px;
	background-color: #e7e6e6;
	margin-right: 5px;
	object-fit: contain;
	margin-top: 30px;
`;
const First = styled.div`
	display: flex;
	margin-top: 50px;
`;
const AuthImage = styled.div``;
const Name = styled.div``;
const But = styled.div`
	height: 30px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: silver;
	border-radius: 5px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;
	width: 100%;
	padding-bottom: 70px;
`;