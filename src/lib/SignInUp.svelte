<script lang="ts">
    import Button from '@smui/button';
	import Dialog, { Actions }  from '@smui/dialog';
    import Paper, { Title, Content } from '@smui/paper';
    import FormField from '@smui/form-field';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import {User,Customer} from './models/Actors';

    export let open=true;

    export let user=new User();
    export let customer:Customer;
    let confirm="";
    let active = 'Sign In';
    let onSubmit=()=>{
        console.log(user)
        customer=user.validate()
        if(!customer){
            validateErrorMsg="sorry could not "+active.toLowerCase()+"\n pls try again"
            openValidateDialog=true
        }
    }
    let validateErrorMsg=""
    let openValidateDialog=false
  </script>
  
  <Dialog
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="mandatory"
  aria-describedby="mandatory you must enter a valid user account"
  bind:open
  >
  <Paper>
    <TabBar tabs={['Sign In', 'Sign Up']} let:tab bind:active>
        <!-- Note: the `tab` property is required! -->
        <Tab {tab}>
          <Label>{tab}</Label>
        </Tab>
    </TabBar>
    <Dialog open={openValidateDialog}>
        <div style="margin:20px">
            {validateErrorMsg}
        </div>
        <Button on:click={()=>{openValidateDialog=false}}>
            close
        </Button>
    </Dialog>
    {#if active=="Sign In"}
    <FormField style="
    display:block;
    ">
        <Content>
            <Textfield bind:value={user.username} label="Username">
                <HelperText slot="helper">Invalid Username</HelperText>
            </Textfield>
            <Textfield bind:value={user.password} type="password" label="Password">
                <HelperText slot="helper">Invalid Password</HelperText>
            </Textfield>
        </Content>
        <Button on:click={onSubmit}>{active}</Button>
    </FormField>  
    {:else if active=="Sign Up"}
    <FormField style="
    display:block;
    "
    onsubmit={()=>{alert("user logging");}}
    >
        <Content>
            <Textfield bind:value={user.username} label="Username">
                <HelperText slot="helper">This name must be unique </HelperText>
            </Textfield>
            <Textfield bind:value={user.password} type="password" label="Password">
                <HelperText slot="helper">Use 8-16 characters </HelperText>
            </Textfield>
            <Textfield bind:value={confirm} type="password" label="Confirm Password">
                <HelperText slot="helper">Retype the password</HelperText>
            </Textfield>
        </Content>
        <Button on:click={onSubmit}>{active}</Button>
    </FormField>  
    {/if}
  </Paper>
   
  </Dialog>
<style>
    *{user-select: none;}
</style>
