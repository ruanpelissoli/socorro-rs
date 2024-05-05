import ResgateItem from '@/components/ResgateItem';

export default function Resgates() {
  return (
    <div>
      <ResgateItem
        PersonQtd={1}
        PetQtd={2}
        address='rua'
        city='cidade'
        neighbourhood='mathias'
        number={3}
      />
    </div>
  );
}
