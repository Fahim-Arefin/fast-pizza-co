import Button from "../../ui/Button";

function CreateUser() {
  return (
    <div className="space-y-5 text-center">
      <p className="text-xl">🖐Welcome! Start by telling us your name</p>
      <input type="text" placeholder="your username" className="input" />
      <Button primary className="px-4 py-2">
        start ordering
      </Button>
    </div>
  );
}

export default CreateUser;
