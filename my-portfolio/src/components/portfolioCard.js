import GunajImage from '../assets/images/GunajChugh.jpg';
const user={
  name:'Gunaj Chugh',
  imageUrl: GunajImage,
  imageSize:90,  
};

export default function PortfolioCard(){
  return (
    <>
      {/* <h1>{user.name}</h1> */}
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>);
}